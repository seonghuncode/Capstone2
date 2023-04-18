package com.ysh.capstone2;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

    @RequestMapping("/test")
    @ResponseBody
    public String test(){
        return "test입니다.";
    }

    @RequestMapping("/test2")
    public String test2(){
        return "test";
    }


    //우선 testController에서 리턴 하는 코드 사용하고
    //-> 추후에 디자인 완성되면 controller나누기 (+service, repository)
    @RequestMapping("/mainPage")
    public String mainPage(){
        return "content/main";
    }




}
