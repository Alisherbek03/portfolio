import React from "react";

import "./work.scss";
import Card from "../card/Card";

// Imgs
import Feedbackimg from "../../assets/feedback.jpg";
import Calc from "../../assets/Calc.png";
import Ecommerce from "../../assets/e commerce.jpg";
import Imgsearch from "../../assets/img search.png";
import Contact from "../../assets/Contact.png";
import TodoList from "../../assets/Todo.png";
import TsxTodo from "../../assets/tsxtodo.png";
import Footer from "../footer/Footer";

const Work = () => {
  return (
    <div>
      <div className="container">
        <div className="work-cards">
          <h1>Works</h1>
          <div className="cards">
            <Card
              imglink={Feedbackimg}
              saytname="Feedback"
              htmllink="Html"
              Css="Css"
              Reactlink="React"
              text="Bu loyihada ma'lumotlarni to'ldirib yuborish tugmasini bosganda google
          sheets ga borib tushadi"
              hyperlink={"https://feedback-sigma-five.vercel.app/"}
            />
            <Card
              imglink={Calc}
              saytname="Calculator"
              htmllink="Html"
              Css="Css"
              Jslin="JS"
              text="Bu loyiha calculator bo'lib hisob kitob qilish uchun"
              hyperlink={"https://calculator-mu-rust-35.vercel.app/"}
            />
            <Card
              imglink={Ecommerce}
              saytname="E commerce"
              htmllink="Html"
              Css="Css"
              Reactlink="React"
              text="Bu loyiha sotuvchi saytda mahsulotlarni saralash  "
              hyperlink={"https://search-ecommerce.vercel.app/"}
            />
            <Card
              imglink={Imgsearch}
              saytname="Img search"
              htmllink="Html"
              Css="Css"
              Jslin="JS"
              text="Bu loyihada qidiruvga yozgan rasmlardan 10 tasini chiqarib beradi"
              hyperlink={"https://imagessearch17.netlify.app/"}
            />
            <Card
              imglink={Contact}
              saytname="Contact"
              htmllink="Html"
              Css="Css"
              Reactlink="React"
              text="Bu loyihada qidiruv orqali userlarni topish mumkin"
              hyperlink={"https://user-search-mu.vercel.app/"}
            />
            <Card
              imglink={TodoList}
              saytname="Todo List"
              htmllink="Html"
              Css="Css"
              Reactlink="React"
              text="Qaydlarni yozib qo'yish o'zgartirish o'chirish"
              hyperlink={"https://todolist-seven-gray.vercel.app/"}
            />
            <Card
              imglink={TsxTodo}
              saytname="Todo List"
              htmllink="Html"
              Css="Css"
              Reactlink="React"
              Tslink="TS"
              text="Qaydlarni yozib qo'yish o'zgartirish o'chirish"
              hyperlink={"https://tsx-todo-henna.vercel.app/"}
            />
          </div>
        </div>
      </div>
      <div className="work-footer">
        <div className="work-footer-text">
          <p>&copy;</p>
          <p>2024</p>
          <p>Made by Alisher</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
