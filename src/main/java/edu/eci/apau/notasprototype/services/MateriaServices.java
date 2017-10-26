/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.apau.notasprototype.services;

import edu.eci.apau.notasprototype.persistence.MateriasRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Esteban
 */
@Service
public class MateriaServices {
    
    @Autowired
    MateriasRepository materiasRepository;
    
    public List<String> getCurrentMaterias(){
        return materiasRepository.loadAllMaterias();
    }
}
