import {createStore} from 'redux'

export default createStore(function(state, action) {
  if(state === undefined) {
    return {
        Timer_ON : function() {
        const clock = document.querySelector('#CTime');
        function getTime(){
            const time = new Date();
            const hour = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            //clock.innerHTML = hour +":" + minutes + ":"+seconds;
            clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
        }
        var time = setInterval(getTime, 1000)
        return time;
        //타이머 멈추는 법->리덕스로 clearInterval하기
      },
      name:"",
      position:"",
      user_id:"",
      password:"",
      section_status:"HOME",
    }
  }

  else if(action.type ==="LOGIN") {
    return {
      ...state, 
      name: action.name,
      position:action.position,
      user_id:action.user_id,
      password:action.password,
    }
  }

  else if(action.type === "LOGOUT") {
    return {
      ...state, 
      name:"",
      position:"",
      user_id:"",
      password:"",
      section_status:"HOME"
    }
  }
  else if(action.type === "ISSUING_CARD") {
    return {
      ...state,
      section_status:"ISSUING_CARD",
    }
  }

  else if(action.type === "LOGIN_PAGE") {
    return {
      ...state,
      section_status: "LOGIN_PAGE"
    }
  }

  else if(action.type === "JOIN") {
    return {
      ...state,
      section_status:"JOIN" //회원가입 컴포넌트를 section에 붙힘 

    }
  }

  else if(action.type === "HOME") {
    return {
      ...state,
      section_status:"HOME" // 해더 상단에 GDSC 로고를 클릭해서 section이 메인 홈 화면으로 바뀜 
    }
  }


})

