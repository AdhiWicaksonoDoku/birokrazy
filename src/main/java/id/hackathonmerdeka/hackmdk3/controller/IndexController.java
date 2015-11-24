package id.hackathonmerdeka.hackmdk3.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arthur Purnama (arthur@purnama.de)
 */
@RestController
public class IndexController {

    @RequestMapping(path = {"/about", "/login"})
    public String forward(){
        return "forward:/";
    }
}
