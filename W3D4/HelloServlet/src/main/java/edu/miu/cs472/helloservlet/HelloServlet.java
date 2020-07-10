package edu.miu.cs472.helloservlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloServlet extends HttpServlet {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
                throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("<!DOCTYPE html>");
        out.print("<html lang='en'>");
        out.print("<head>");
        out.print("    <meta charset='UTF-8'>");
        out.print("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        out.print("    <title>My First Servlet Application</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("<form action='hello' method='POST'>");
        out.print("    <label>Name:</label>");
        out.print("    <input type='text' name='name' placeholder='Enter your name'>");
        out.print("    <input type='submit' value='Click me'>");
        out.print("</form>");
        out.print("</body>");
        out.print("</html>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        String name = request.getParameter("name");
        PrintWriter out = response.getWriter();
        out.print("<!DOCTYPE html>");
        out.print("<html lang='en'>");
        out.print("<head>");
        out.print("    <meta charset='UTF-8'>");
        out.print("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        out.print("    <title>My First Servlet Application</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("    <p>Hello " + (name.equals("") ? "World" : name) + "!</p>");
        out.print("</body>");
        out.print("</html>");
    }
}