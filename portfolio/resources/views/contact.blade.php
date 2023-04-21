@extends('layouts.main')

        @section('content')
            <div class="container">
                <div class="contact-content drop-in">
                    <h3>Let's Talk!</h3>
                    <form action="#" method="POST">
                        @csrf
                        <div class="input-field">
                            <input placeholder="Full Name" id="full_name" type="text" class="validate">
                        </div>
                        <div class="input-field">
                            <input placeholder="Email Address" id="email_add" type="text" class="validate">
                        </div>
                        <div class="input-field">
                            <textarea id="textarea1" class="materialize-textarea" placeholder="Message"></textarea>
                          </div>
                        <button class="btn waves-effect waves-light" type="submit">Send <i class="bi bi-send"></i></button>
                    </form>
                    
                </div>
                <div class="page-links">
                    <div class="links-content">
                        <div class="txt-primary about-link">
                            <a href="/"><i class="bi bi-house links-icon"></i></a>
                        </div>
                        <div class="txt-primary projects-link">
                            <a href="about"><i class="bi bi-person links-icon"></i></a>
                        </div>
                        <div class="txt-primary projects-link">
                            <a href="projects"><i class="bi bi-files links-icon"></i></a>
                        </div>
                        <div class="txt-primary projects-link">
                            <a href="contact"><i class="bi bi-chat-dots links-icon active"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        @endsection