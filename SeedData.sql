

CREATE TABLE capstone.clients (
  customer_id INT NOT NULL AUTO_INCREMENT,
  customer_name VARCHAR(45) NULL,
  email VARCHAR(45) NOT NULL,
  city VARCHAR(45) NULL,
  state VARCHAR(45) NULL,
  zip_code VARCHAR(45) NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (customer_id),
  UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE);
  
  
CREATE TABLE `capstone`.`consultations` (
  `consultation_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `budget` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `transportation` VARCHAR(45) NULL,
  `amount_of_attendees` VARCHAR(45) NULL,
  `package_deals` VARCHAR(45) NULL,
  PRIMARY KEY (`consultation_id`),
  FOREIGN KEY (customer_id)
  REFERENCES capstone.clients (customer_id))
  ;
  
  CREATE TABLE `capstone`.`invoice` (
  `invoice_id` INT NOT NULL,
  `customer_id` INT NOT NULL,
  `total` VARCHAR(45) NOT NULL,
  `tax_exempt` VARCHAR(45) NOT NULL,
  `payment_type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`invoice_id`),
  INDEX `fk_customer_id_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `capstone`.`clients` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    
    
INSERT INTO `capstone`.`clients` (`customer_name`, `email`, `city`, `state`, `zip_code`, `password`) 
VALUES ('bryan mendez', 'bmend@gmail.com', 'austin', 'tx', '78617', 'google11');
INSERT INTO `capstone`.`clients` (`customer_name`, `email`, `city`, `state`, zip_code, `password`) 
VALUES ('ryan2', 'ryan2@gmail.com', 'denver', 'co', NULL,'colorado11');




