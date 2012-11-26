/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.treinamento.helloworld;

/**
 *
 * @author luis
 */
public class Hello {

    private final String greeting;

    public Hello(String greeting) {
        this.greeting = greeting;
    }

    public String sayHi() {
        return greeting + " World";
    }
}
