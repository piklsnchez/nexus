package com.swgas.nexus.rest;

import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import java.net.URI;
import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.logging.Logger;

import javax.json.Json;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

@Path("payBill")
public class PayBill {
  private static final String CLASS = PayBill.class.getName();
  private static final Logger LOG = Logger.getLogger(CLASS);
  
  @POST
  @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
  public Response payBill1(@FormParam("accountNumber") String accountNumber, @FormParam("name") String name, @FormParam("email") String email, @FormParam("birthDate") String birthDate) {
    LOG.entering(CLASS, "payBill", new String[] {accountNumber, name, email, birthDate});
    
    return Response.seeOther(URI.create("../payBill2.html")).cookie(new NewCookie("webCustomerUid", "1601", "/", null, 2, "", 1000, Date.from(Instant.now().plus(1, ChronoUnit.DAYS)), false, false)).build();
  }
  
  @Path("{id}")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Response payBillCustomer(@PathParam("id") long customerUid) {
    LOG.entering(CLASS, "payBillCustomer", new Object[] {customerUid});
    
    return Response.ok(Json.createObjectBuilder()
    .add("customerName"     , "John DeFwan")
    .add("address"          , "7301 Super Fake St. Las Nevgas, NV.")
    .add("accountNumber"    , "211-7972978-002")
    .add("currentAmountDue" , 14.78)
    .add("previousAmountDue", 0.0)
    .add("paymentDueDate"   , LocalDate.now().plusDays(5).format(DateTimeFormatter.ofPattern("MMMM, dd yyyy")))
    .build().toString()).build();
  }
}
