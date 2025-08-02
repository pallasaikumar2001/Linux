package org.example;

import org.testng.annotations.Test;

import static org.testng.Assert.*;

public class MainTest {
    @Test(priority=1)
    void setup(){
        System.out.println("I am inside setup");
    }
    @Test(priority=2)
    void testSteps(){
        System.out.println("I am inside teststeps");
    }
    @Test(priority=3)
    void tearDown(){
        System.out.println("I am inside tearDown");
    }

}