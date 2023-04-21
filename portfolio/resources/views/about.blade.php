@extends('layouts.main')

        @section('content')
            <div class="container">
                <div class="about-content drop-in">
                    <div class="about-img">
                        <img src="/img/dp.webp" alt="">
                    </div>
                    <div class="about-content-profile">
                        <p>"I am a passionate career shifter who is interested in the field of web development and design. With a creative eye and a love for coding, I have honed my skills in developing and designing websites, constantly seeking out new challenges to tackle. My dedication and enthusiasm for this field makes me a valuable asset to any team or project I work on, and I am constantly seeking out ways to improve and grow in my career."</p>
                        <a href="contact" class="btn-contact waves-effect waves-light">Hire Me!</a>
                    </div>
                </div>
                <div class="page-links">
                    <div class="links-content">
                        <div class="txt-primary about-link">
                            <a href="/"><i class="bi bi-house links-icon"></i></a>
                        </div>
                        <div class="txt-primary projects-link">
                            <a href="about"><i class="bi bi-person links-icon active"></i></a>
                        </div>
                        <div class="txt-primary projects-link">
                            <a href="projects"><i class="bi bi-files links-icon"></i></a>
                        </div>
                        <div class="txt-primary projects-link">
                            <a href="contact"><i class="bi bi-chat-dots links-icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        @endsection