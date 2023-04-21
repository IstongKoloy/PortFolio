@extends('layouts.main')

        @section('content')
            <div class="container">
                <div class="content txt-primary drop-in animate-charcter">Welcome!<br />I am  <span class="txt-variant">G</span>lenn <span class="txt-variant">A</span>ndaleon
                <br />
                </div>
                <div class="content txt-primary drop-in-2">
                    PHP and Laravel Developer
                </div>
                <div class="page-links">
                    <div class="links-content">
                        <div class="txt-primary about-link">
                            <a href="/"><i class="bi bi-house links-icon active"></i></a>
                        </div>
                        <div class="txt-primary projects-link">
                            <a href="about"><i class="bi bi-person links-icon"></i></a>
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