import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/task.routes";
import path from "path";
import morgan from "morgan";

const app = express();

var dolar = 0.05;
var euro = 0.045;

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",

  helpers:{
    pesodolar: function(value){
      dolar = dolar * value;
    },

    pesoeuro:function(value){
      euro = euro * value;
    },

    totaldolar: function(){
      return dolar;
    },

    totaleuro: function(){
      return euro;
    },

    reset: function(){
      dolar = 0.05;
      euro = 0.045;
    }

  }
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404");
});



export default app;