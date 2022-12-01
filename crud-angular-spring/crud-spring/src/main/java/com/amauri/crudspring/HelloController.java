package com.amauri.crudspring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HelloController {
  static final String HELLO = "Hello World! by Amauri";

  @GetMapping
  public String hello() {
    return HELLO;
  }
}
