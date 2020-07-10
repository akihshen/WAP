package edu.miu.cs472.improvedcalculator;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ImprovedCalculator extends HttpServlet{
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
                throws ServletException, IOException {
        
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
        String sum = "";
        String product = "";
        String in1 = "";
        String in2 = "";
        String in3 = "";
        String in4 = "";

        if(!request.getParameter("addend1").isBlank() && !request.getParameter("addend2").isBlank()){
            double add1 = Double.parseDouble(request.getParameter("addend1"));
            double add2 = Double.parseDouble(request.getParameter("addend2"));
            in1 = "<input type='text' name='addend1' pattern='[0-9]+\\.?[0-9]*' title='Enters numbers only'" +
                    "value=" + add1 + ">";
            in2 = "<input type='text' name='addend2' pattern='[0-9]+\\.?[0-9]*' title='Enters numbers only'" +
            "value=" + add2 + ">";
            sum = "<input type='text' name='sum' value=" + (add1 + add2) + " disabled>";
        }

        if(!request.getParameter("multiplicand1").isBlank() && !request.getParameter("multiplicand2").isBlank()){
            double mul1 = Double.parseDouble(request.getParameter("multiplicand1"));
            double mul2 = Double.parseDouble(request.getParameter("multiplicand2"));
            in3 = "<input type='text' name='multiplicand1' pattern='[0-9]+\\.?[0-9]*' title='Enters numbers only'" +
                    "value=" + mul1 + ">";
            in4 = "<input type='text' name='multiplicand2' pattern='[0-9]+\\.?[0-9]*' title='Enters numbers only'" +
            "value=" + mul2 + ">";
            product = "<input type='text' name='product' value=" + (mul1 * mul2) + " disabled>";
        }

        PrintWriter out = response.getWriter();

        out.print("<!DOCTYPE html>");
        out.print("<html lang='en'>");
        out.print("    <head>");
        out.print("        <meta charset='UTF-8'>");
        out.print("        <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        out.print("        <title>Improved Calculator</title>");
        out.print("        <style>");
        out.print("            div{");
        out.print("                padding: 5px 0px");
        out.print("            }");
        out.print("");
        out.print("            legend{");
        out.print("                font-weight: bolder");
        out.print("            }");
        out.print("        </style>");
        out.print("    </head>");
        out.print("");
        out.print("    <body>");
        out.print("        <fieldset>");
        out.print("            <legend>Improved Calculator</legend>");
        out.print("            <form action='calculate' method='POST'>");
        out.print("                <div>");
        out.print("                    <div>");
        out.print("                        " + in1);
        out.print("                        + " + in2);
        out.print("                        = " + sum); 
        out.print("                    </div>");
        out.print("                    <div>");
        out.print("                        " + in3);
        out.print("                        * " + in4);
        out.print("                        = " + product);
        out.print("                    </div>");
        out.print("                    <div><input type='submit' value='Submit'></div>");
        out.print("                </div>                ");
        out.print("            </form>");
        out.print("        </fieldset>");
        out.print("    </body>");
        out.print("</html>");

        
        // To be used for a single page Calculator application by redirecting or forwarding the response 
        // to the requesting page and keeping the inpu values as well as adding the calculated results

        // double sum = 0;
        // double product = 0;
        
        // RequestDispatcher dispatcher = request.getRequestDispatcher("/ImprovedCalculator/index.jsp");
        
        // if(!request.getParameter("addend1").isBlank() && !request.getParameter("addend2").isBlank()){
        //     double add1 = Double.parseDouble(request.getParameter("addend1"));
        //     double add2 = Double.parseDouble(request.getParameter("addend2"));
        //     sum = add1 + add2;
        //     request.setAttribute("sum", sum);
        // }

        // if(!request.getParameter("multiplicand1").isBlank() && !request.getParameter("multiplicand2").isBlank()){
        //     double mul1 = Double.parseDouble(request.getParameter("multiplicand1"));
        //     double mul2 = Double.parseDouble(request.getParameter("multiplicand2"));
        //     product = mul1 * mul2;
        //     request.setAttribute("product", product);
        // }    

        // response.sendRedirect("index.jsp");
        // dispatcher.forward( request, response );
        // response.sendRedirect(request.getRequestURI());
        // response.sendRedirect(request.getHeader("Referer"));
        // request.getRequestDispatcher("/WEB-INF/index.jsp").forward(request, response);
        // request.getRequestDispatcher("/ImprovedCalculator/index.jsp").forward(request, response);
    }
}