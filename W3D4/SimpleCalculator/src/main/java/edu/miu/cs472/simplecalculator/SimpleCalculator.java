package edu.miu.cs472.simplecalculator;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SimpleCalculator extends HttpServlet {
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

        if(!request.getParameter("addend1").isBlank() && !request.getParameter("addend2").isBlank()){
            double add1 = Double.parseDouble(request.getParameter("addend1"));
            double add2 = Double.parseDouble(request.getParameter("addend2"));
            sum = "    <p style='font-family: monospace'>" + add1 + " + " + add2 + " = " + (add1 + add2) + "</p>";
        }

        if(!request.getParameter("multiplicand1").isBlank() && !request.getParameter("multiplicand2").isBlank()){
            double mul1 = Double.parseDouble(request.getParameter("multiplicand1"));
            double mul2 = Double.parseDouble(request.getParameter("multiplicand2"));
            product = "    <p style='font-family: monospace'>" + mul1 + " * " + mul2 + " = " + (mul1 * mul2) + "</p>";
        }       

        PrintWriter out = response.getWriter();
        out.print("<!DOCTYPE html>");
        out.print("<html lang='en'>");
        out.print("<head>");
        out.print("    <meta charset='UTF-8'>");
        out.print("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        out.print("    <title>Simple Calculator</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("    <h1>Your Calculation Results:</h1>");
        out.print(sum);
        out.print(product);
        out.print("</body>");
        out.print("</html>");
    }    
}