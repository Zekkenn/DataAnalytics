/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.apau.notasprototype.controllers;

import edu.eci.apau.notasprototype.model.Materia;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Esteban
 */

@Controller
@RestController
@Service
public class NotasAPIController {
    
    @RequestMapping(value = "/index" ,method = RequestMethod.GET)
    /*public ModelAndView getHome(ModelAndView modelAndView, Materia materia){
        modelAndView.addObject("materia", materia);
        modelAndView.setViewName("index");
        return modelAndView;
    }*/
    public ResponseEntity<?> getHome(){
        return new ResponseEntity<>("Home", HttpStatus.ACCEPTED);
    }
}
