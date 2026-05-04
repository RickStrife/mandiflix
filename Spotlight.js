        const css = `        .spotlight-container{width:100%;display:block;position:relative;margin:0;margin-bottom:-8em;padding:0;transition:box-shadow .3s ease;border-radius:0;box-shadow:none;min-height:420px !important}
        .spotlight-container:hover{box-shadow:none;border-radius:0}
        .spotlight{position:relative;overflow:visible;width:100%;height:100%}
        
        /* The Mask: Tightened to the edges (4%) so it doesn't touch your content */
        .spotlight .banner-slider-wrapper {
            position:relative;width:100%;height:420px !important;overflow:hidden;border-radius:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0);
            -webkit-mask-image: 
                linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%),
                linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%) !important;
            mask-image: 
                linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%),
                linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%) !important;
            -webkit-mask-composite: source-in !important;
            mask-composite: intersect !important;
        }

        .spotlight .banner-slider{display:flex;transition:transform .5s ease;will-change:transform;margin:0;padding:0;width:100%;height:100%}
        .spotlight .banner-item{flex:0 0 100%;min-width:100%;max-width:100%;height:100%;position:relative;cursor:pointer;margin:0;padding:0;box-sizing:border-box;overflow:hidden}
        .spotlight .banner-cover{width:100%;height:100%;object-fit:cover;object-position:center;display:block;pointer-events:none;margin:0;padding:0;border:0;outline:0;position:relative;transform-origin:center center;animation:zoomOut 8s ease-out forwards}
        @keyframes zoomOut{0%{transform:scale(1.15)}100%{transform:scale(1.0)}}
        
        .spotlight .video-backdrop{width:100vw;height:56.25vw;min-height:420px !important;min-width:177.77vh;object-fit:cover;object-position:center;display:block;pointer-events:none;margin:0;padding:0;border:0;outline:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.1);z-index:1}
        .spotlight .youtube-backdrop,.spotlight .html5-backdrop{animation:none!important}
        .spotlight .youtube-backdrop{opacity:0;transition:opacity .5s ease-in}
        .spotlight .youtube-backdrop.video-ready{opacity:1}
        .spotlight .youtube-backdrop iframe{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;transition:opacity .5s ease-in}
        .spotlight .youtube-backdrop.video-ready iframe{opacity:1}
        .spotlight .video-placeholder{width:100%;height:100%;object-fit:cover;object-position:center;display:block;pointer-events:none;margin:0;padding:0;border:0;outline:0;position:absolute;top:0;left:0;z-index:2;transition:opacity .5s ease-out}
        .spotlight .video-placeholder.hidden{opacity:0;pointer-events:none}
        
        /* Gradients: Absolute minimal impact, reduced width, height, and opacity across all edges */
        .spotlight .banner-gradient-left{position:absolute;top:0;bottom:0;left:0;width:25%;pointer-events:none;z-index:6;background:linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%) !important}
        .spotlight .banner-gradient-right{position:absolute;top:0;bottom:0;right:0;width:10%;pointer-events:none;z-index:6;background:linear-gradient(to left, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%) !important}
        .spotlight .banner-vignette-top{position:absolute;top:0;left:0;right:0;height:3%;pointer-events:none;z-index:6;background:linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%) !important}
        .spotlight .banner-vignette-bottom{position:absolute;bottom:0;left:0;right:0;height:30%;pointer-events:none;z-index:6;background:linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%) !important}

        .spotlight .banner-logo{position:absolute;left:4vw;top:8vh;transform:none;max-width:30%;max-height:140px !important;object-fit:contain;z-index:15;filter:drop-shadow(0 6px 20px rgba(0,0,0,0.95));pointer-events:none;cursor:default;transition:transform .5s ease,opacity .3s ease}
        .spotlight .banner-logo.hidden{opacity:0;pointer-events:none}
        .spotlight .banner-title{position:absolute;left:4vw;top:8vh;transform:none;z-index:10;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:700;color:#fff;text-shadow:2px 2px 8px rgba(0,0,0,0.9);pointer-events:none;cursor:default;text-align:left;max-width:35%;transition:transform .5s ease,opacity .3s ease}
        .spotlight .banner-title.hidden{opacity:0;pointer-events:none}
        .spotlight .banner-overview{margin-top:.5rem;max-width:45%;padding:0;background:none;pointer-events:none;cursor:default;visibility:visible !important}
        .spotlight .banner-overview-text{font-size:0.95rem !important;color:rgba(255,255,255,0.9);text-shadow:2px 2px 8px rgba(0,0,0,0.99);font-weight:500;line-height:1.4;text-align:left;display:-webkit-box;-webkit-line-clamp:4 !important;overflow:hidden;text-overflow:ellipsis;visibility:visible !important}
        
        @media(max-height:950px) {.spotlight .banner-overview,.spotlight .banner-overview-text{visibility:visible !important; display:block !important}}
        
        .spotlight .banner-tagline{display:none!important}
        .spotlight .banner-info{position:absolute;left:4vw;bottom:1rem;z-index:10;display:flex;flex-direction:column;align-items:flex-start;gap:.3rem;pointer-events:none;max-width:80%;transform:scale(0.85);transform-origin:left bottom}
        .spotlight .banner-genres{display:flex;gap:.8rem;flex-wrap:wrap;justify-content:flex-start}
        .spotlight .banner-genre{font-size:1.1rem;color:rgba(255,255,255,0.9);text-shadow:1px 1px 4px rgba(0,0,0,0.9);font-weight:500}
        .spotlight .banner-genre:not(:last-child)::after{content:'•';margin-left:1.5rem;opacity:.6}
        .spotlight .banner-meta{display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap;justify-content:flex-start}
        .spotlight .banner-meta-item{font-size:1.1rem;color:rgba(255,255,255,0.85);text-shadow:1px 1px 4px rgba(0,0,0,0.9);font-weight:500}
        .spotlight .meta-rating-item{display:flex;align-items:center;gap:.4rem}
        .spotlight .meta-rating-icon{width:1.6rem;height:1.6rem;object-fit:contain}
        .spotlight .meta-rating-star{width:1.6rem;height:1.6rem;fill:#cb272a}
        .spotlight .meta-rating-score{font-size:1.1rem;font-weight:500;color:rgba(255,255,255,0.85)}
        .spotlight .custom-ratings-container{display:flex;gap:1rem;flex-wrap:wrap;align-items:center}
        .spotlight .custom-rating-item{display:flex;align-items:center;gap:.3rem}
        .spotlight .custom-rating-logo{height:1.4rem;width:auto;object-fit:contain}
        .spotlight .custom-rating-value{font-size:1rem;font-weight:500;color:rgba(255,255,255,0.85)}
        .spotlight .play-button-overlay{position:absolute;top:3rem;right:1.5rem;z-index:25;opacity:0;transition:opacity .3s ease;pointer-events:none}
        .spotlight-container:hover .play-button-overlay{opacity:1;pointer-events:all}
        .spotlight .banner-genres-row{display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap}
        .spotlight .banner-rating-badge{color: #fff;text-align: center;text-transform: uppercase;text-shadow: 0 0 2px rgba(0, 0, 0, .8);border-radius: 4px;border: 1px solid transparent;padding: 1px 6px;min-width: 20px;line-height: 1.2;display: inline-flex;align-items: center;font-size: 1.1rem;font-weight: 600;background: #616161;transition: all .2s ease;}
        .spotlight .banner-rating-badge:hover{transform:scale(1.05);box-shadow:0 2px 8px rgba(0,0,0,.3)}     
        .spotlight .banner-awards-row{display:none;align-items:center;gap:.6rem;flex-wrap:wrap}
        .spotlight .banner-awards-row.has-awards{display:flex}
        .spotlight .banner-oscar-logo,.spotlight .banner-globes-logo,.spotlight .banner-emmy-logo,.spotlight .banner-bafta-logo,.spotlight .banner-razzies-logo,.spotlight .banner-berlinale-logo,.spotlight .banner-cannes-logo,.spotlight .banner-venezia-logo{height:1.1rem;width:auto;object-fit:contain;margin-bottom:3px;margin-right:5px}
        .spotlight .play-button{width:70px;height:70px;border-radius:50%;background:rgba(55,55,55,0.3);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease}
        .spotlight .play-button:hover{transform:scale(1.02);background:${playbuttonColor}}
        .spotlight .play-button svg{width:35px;height:35px;fill:#fff;margin-left:6px}
        .spotlight .pause-button{position:absolute;bottom:7rem;right:2rem;z-index:25;width:45px;height:45px;border-radius:50%;background:rgba(55,55,55,0.3);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease;opacity:0;pointer-events:none}
        .spotlight-container:hover .pause-button.visible{opacity:1;pointer-events:all}
        .spotlight .pause-button svg{width:22px;height:22px;fill:#fff}
        .spotlight .mute-button{position:absolute;bottom:3rem;right:2rem;z-index:25;width:45px;height:45px;border-radius:50%;background:rgba(55,55,55,0.3);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease;opacity:0;pointer-events:none}
        .spotlight-container:hover .mute-button.visible{opacity:1;pointer-events:all}
        .spotlight .mute-button svg{width:22px;height:22px;fill:#fff}
        .spotlight .refresh-button{position:absolute;bottom:15rem;right:2rem;z-index:25;width:45px;height:45px;border-radius:50%;background:rgba(55,55,55,0.3);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease;opacity:0;pointer-events:none}
        .spotlight-container:hover .refresh-button.visible{opacity:1;pointer-events:all}
        .spotlight .refresh-button svg{width:22px;height:22px;fill:#fff}
		.spotlight .autoplay-button{position:absolute;bottom:11rem;right:2rem;z-index:25;width:45px;height:45px;border-radius:50%;background:rgba(55,55,55,0.3);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease;opacity:0;pointer-events:none}
		.spotlight-container:hover .autoplay-button.visible{opacity:1;pointer-events:all}
		.spotlight .autoplay-button svg{width:22px;height:22px;fill:#fff}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .spotlight .arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:20;border:none;color:#fff;cursor:pointer;opacity:.7;padding:0;background:none;transition:opacity .3s;display:flex;align-items:center;justify-content:center}
        .spotlight .arrow svg{filter:drop-shadow(0 2px 6px rgba(0,0,0,0.8))}
        .spotlight .arrow:hover{opacity:1}
        .spotlight .arrow.left{left:1rem}
        .spotlight .arrow.right{right:1rem}
        .spotlight .controls{position:absolute;right:2rem;bottom:1.5rem;z-index:20;display:flex;gap:.5rem}
        .spotlight .control{width:.7rem;height:.7rem;border-radius:50%;background:rgba(255,255,255,0.4);border:none;cursor:pointer;transition:background .3s}
        .spotlight .control.active{background:#fff}
        .spotlight .loader{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:30;background:rgba(0,0,0,0.3)}
        
        .view:not(.hide) .homeSectionsContainer { margin-top: 10px !important; padding-top: 0 !important; }
        
        @media(max-width:768px),(orientation:portrait){
            .spotlight-container{min-height:60vh}
            .spotlight .banner-slider-wrapper{height:60vh}
            .spotlight .banner-logo,.spotlight .banner-title,.spotlight .banner-overview{left:50%;transform:translateX(-50%);max-width:70%;text-align:center}
            .spotlight .banner-info{left:50%;transform:translateX(-50%);max-width:85%;align-items:center}
            .spotlight .control,.spotlight .pause-button,.spotlight .mute-button,.spotlight .autoplay-button,.spotlight .refresh-button,.spotlight .play-button{display:none}
        }`;
