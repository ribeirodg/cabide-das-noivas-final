-- MySQL Script generated by MySQL Workbench
-- Sun Oct  3 22:01:22 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `tefone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `nick_name` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`colecao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`colecao` (
  `id_colecao` INT NOT NULL AUTO_INCREMENT,
  `nome_colecao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_colecao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cor` (
  `id_cor` INT NOT NULL,
  `descricao_cor` VARCHAR(45) NULL,
  PRIMARY KEY (`id_cor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`vestido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`vestido` (
  `id_vestido` INT NOT NULL AUTO_INCREMENT,
  `nome_vestido` VARCHAR(45) NOT NULL,
  `preco` DECIMAL(10,2) NOT NULL,
  `descricao_vestido` MEDIUMTEXT NOT NULL,
  `id_colecao` INT NOT NULL,
  `id_cor` INT NOT NULL,
  PRIMARY KEY (`id_vestido`, `id_cor`),
  INDEX `fk_produto_categoria_idx` (`id_colecao` ASC) VISIBLE,
  INDEX `fk_vestido_cor1_idx` (`id_cor` ASC) VISIBLE,
  CONSTRAINT `fk_produto_categoria`
    FOREIGN KEY (`id_colecao`)
    REFERENCES `mydb`.`colecao` (`id_colecao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_vestido_cor1`
    FOREIGN KEY (`id_cor`)
    REFERENCES `mydb`.`cor` (`id_cor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`enderecos_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`enderecos_usuario` (
  `idenderecos_usuario` INT NOT NULL,
  `logradouro_usuario` VARCHAR(45) NULL,
  `numero_usuario` VARCHAR(45) NULL,
  `usuario_id` INT NOT NULL,
  `cep` INT NULL,
  `estado` VARCHAR(45) NULL,
  `cidade` VARCHAR(45) NULL,
  `complemento` VARCHAR(45) NULL,
  PRIMARY KEY (`idenderecos_usuario`, `usuario_id`),
  INDEX `fk_enderecos_usuario_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_enderecos_usuario_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `mydb`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `usuario_id` INT NOT NULL,
  `valor_total_pedido` DECIMAL(10,2) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `enderecos_usuario_id` INT NOT NULL,
  INDEX `fk_pedidos_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  PRIMARY KEY (`id`, `usuario_id`, `enderecos_usuario_id`),
  INDEX `fk_pedidos_enderecos_usuario1_idx` (`enderecos_usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `mydb`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_enderecos_usuario1`
    FOREIGN KEY (`enderecos_usuario_id`)
    REFERENCES `mydb`.`enderecos_usuario` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos_has_vestido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos_has_vestido` (
  `pedidos_id` INT NOT NULL,
  `produto_id` INT NOT NULL,
  `quantidade` INT NOT NULL,
  `valor_total` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`pedidos_id`, `produto_id`),
  INDEX `fk_pedidos_has_produto_produto1_idx` (`produto_id` ASC) VISIBLE,
  INDEX `fk_pedidos_has_produto_pedidos1_idx` (`pedidos_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_has_produto_pedidos1`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `mydb`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_produto_produto1`
    FOREIGN KEY (`produto_id`)
    REFERENCES `mydb`.`vestido` (`id_vestido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tamanho_vestido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tamanho_vestido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `codigo` INT NOT NULL,
  `tamanho` VARCHAR(45) NOT NULL,
  `vestido_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_detalhe_produto_produto1_idx` (`vestido_id` ASC) VISIBLE,
  CONSTRAINT `fk_detalhe_produto_produto1`
    FOREIGN KEY (`vestido_id`)
    REFERENCES `mydb`.`vestido` (`id_vestido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
