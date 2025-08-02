package org.example;

import static org.testng.Assert.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;
//import org.junit.jupiter.api.Test;
import org.testng.annotations.Test;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
public class MainTest {
    @Test
    public void test1(){
        System.out.println("Running test-1");
        Response response=RestAssured.get("https://reqres.in/api/users/5");
        System.out.println("Status code: "+response.getStatusCode());
        System.out.println(response.prettyPrint());

    }
}