import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div id="recover_password" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h5 class="modal-title">Reset Password</h5>
                            </div>
    //------------------------------FORGOT PASSWORD FORM-----------------------------
                            <form action="<?php echo base_url(); ?>index.php/Login/send_recover_email" method="post">
                                
                            <div class="modal-body">

                                <div class="form-group">
                                    <label for="Email">Email Address</label>
                                    <input type="Email" class="form-control" name="Email" required  placeholder="example@example.com"/>
                                </div>

                            </div>

                            <div class="modal-footer" style="width: 100% !important;">
                                <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" >Send</button>
                            </div>
                            </form>
                     </div>
    </div>
</div>
// -- /basic modal -->



//-----------------------------REGISTER class="content" style="padding-top: 50px;">
//------------------------------REGISTER class="row">
<div class="col-md-4 col-md-offset-4" >
 
//----------------------------REGISTER class="panel panel-login">
	<div style="text-align: center"><img src="assets/images/logo-login.png"/></div>
<div class="panel-heading" style="padding-top: 30px">
    <div class="row">
    <div class="col-xs-6">
    <a href="#" class="active" onclick="asd(1)">Login</a>
    </div>
    <div class="col-xs-6">
    <a href="#" class="active" onclick="asd(2)">Register</a>
    </div>
    </div>
    <hr/>
  
</div>

//----------------------------REGISTER class="panel panel-login" style="padding: 1px;">
//-----------------------------REGISTER class="row">
//------------------------------REGISTER class="col-lg-12">

//  -----------------------LOGIN FORM-----------------------------------
<div id="login">
<form action="<?php echo base_url(); ?>index.php/login" method="post" >
    <div class="form-group">
        <input type="text" name="login_username" id="username" tabindex="1" class="form-control" placeholder="Email" value="" required/>
    </div>
    <div class="form-group">
        <input type="password" name="login_password" id="password" tabindex="2" class="form-control" placeholder="Password" required/>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-primary" value="Log In"/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                    <a href="#" tabindex="5" class="forgot-password" data-toggle="modal" data-target="#recover_password">Forgot Password?</a>
                </div>
            </div>
        </div>
    </div>
</form>
</div>


/* -----------------------------REGISTER FORM--------------------------------------
<div id="register" style="display: none;">
<form action="<?php echo base_url(); ?>index.php/signup" method="post">
    <div class="form-group">
        <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Full Name" value="">
    </div>
    <div class="form-group">
        <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="" required/>
    </div>
        <div class="form-group">
        <input type="number" name="phone" id="phone" tabindex="1" class="form-control" placeholder="Phone Number" value="" required/>
    </div>
    <div class="form-group">
        <input type="password" name="password" id="sign_password"  tabindex="2" class="form-control" onkeyup='check();' placeholder="Password" required/>
    </div>
    <div class="form-group">
        <input type="password" name="confirm-password" id="sign_confirm_password"  tabindex="2" class="form-control" onkeyup='check();' placeholder="Confirm Password" required/>
         <span id='message'></span>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-primary" value="Register Now"/>
            </div>
        </div>
    </div>
</form>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>

            <h4>
                <p>   We enable you book tickets for any upcoming events registered with us. </p>
                <p>   As an event organiser, sign in to register your events with us.</p>
            </h4>
            </div> 
        )
    }
}


