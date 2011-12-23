package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def workingprecompiled = Action {
    Ok(views.html.indexworking("This is a static page with all of the assets included and statically defined."))
  }
  
}
