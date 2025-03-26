import{r as l,R as k,a as S}from"./vendor-CepNLU45.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var j={exports:{}},m={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=l,I=60103;m.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var y=Symbol.for;I=y("react.element"),m.Fragment=y("react.fragment")}var E=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function M(e,r,n){var o,a={},i=null,d=null;n!==void 0&&(i=""+n),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(d=r.ref);for(o in r)X.call(r,o)&&!D.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)a[o]===void 0&&(a[o]=r[o]);return{$$typeof:I,type:e,key:i,ref:d,props:a,_owner:E.current}}m.jsx=M;m.jsxs=M;j.exports=m;var t=j.exports;const L=()=>{const e=document.createElement("style");e.textContent=`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      overflow: hidden;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes float {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      25% {
        transform: translateY(-15px) rotate(2deg);
      }
      50% {
        transform: translateY(0px) rotate(0deg);
      }
      75% {
        transform: translateY(15px) rotate(-2deg);
      }
      100% {
        transform: translateY(0px) rotate(0deg);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
      }
      70% {
        transform: scale(1.05);
        box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.2);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }
    
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes floatParticle {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      50% {
        opacity: 0.8;
      }
      100% {
        transform: translateY(-100vh) translateX(var(--translate-x));
        opacity: 0;
      }
    }
    
    @keyframes gradientBackground {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
    @keyframes glow {
      0% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(227, 24, 55, 0.6);
      }
      100% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
    }
    
    .home-container {
      width: 100vw;
      height: 100vh;
      background: url('/assets/360-images/background.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
      overflow: hidden;
    }
    
    .home-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
      z-index: 1;
    }
    
    .parallax-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .content {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 0 20px;
      perspective: 1000px;
    }
    
    .logo-container {
      position: relative;
      width: 200px;
      height: 200px;
      margin-bottom: 2rem;
    }
    
    .logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }
    
    .logo-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      animation: glow 3s infinite;
      z-index: -1;
    }
    
    .title-container {
      position: relative;
      perspective: 1000px;
    }
    
    .title {
      font-size: 3.5rem;
      text-align: center;
      margin-bottom: 1rem;
      animation: fadeIn 1s ease-out 0.3s backwards;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
      background: linear-gradient(90deg, #ffffff, #f0f0f0, #ffffff);
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientBackground 3s ease infinite;
      transform-style: preserve-3d;
    }
    
    .subtitle {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 2rem;
      animation: fadeIn 1s ease-out 0.6s backwards;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
      max-width: 800px;
      position: relative;
      overflow: hidden;
    }
    
    .subtitle:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ffffff, transparent);
      animation: slideInRight 2s infinite;
    }
    
    .button-container {
      position: relative;
      perspective: 1000px;
      margin: 2rem 0;
    }
    
    .start-button {
      padding: 1.2rem 3.5rem;
      font-size: 1.5rem;
      background: linear-gradient(45deg, #e31837, #ff3352);
      color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: fadeIn 1s ease-out 0.9s backwards, pulse 2.5s infinite 2s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      box-shadow: 0 5px 15px rgba(227, 24, 55, 0.4);
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    .start-button:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      transform: rotate(45deg);
      transition: all 0.5s ease;
      opacity: 0;
      z-index: -1;
    }
    
    .start-button:hover {
      transform: scale(1.1) translateY(-5px);
      background: linear-gradient(45deg, #ff1f41, #ff4d68);
      box-shadow: 0 10px 25px rgba(227, 24, 55, 0.6);
    }
    
    .start-button:hover:before {
      opacity: 1;
      animation: rotate 3s linear infinite;
    }
    
    .explore-text {
      position: absolute;
      bottom: 2rem;
      font-size: 1.2rem;
      opacity: 0.8;
      animation: fadeIn 1s ease-out 1.2s backwards;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }
    
    .compass {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 80px;
      height: 80px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 1s ease-out 1.5s backwards, pulse 5s infinite;
      backdrop-filter: blur(5px);
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }
    
    .compass:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }
    
    .compass::after {
      content: '';
      width: 50px;
      height: 50px;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 2L8 11h8l-4-9zm0 20l4-9H8l4 9z"/></svg>');
      background-size: contain;
      animation: rotate 15s linear infinite;
    }
    
    .direction-indicator {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: absolute;
      font-weight: bold;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .direction-indicator:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
    
    .direction-right {
      top: 50%;
      right: 2rem;
      transform: translateY(-50%);
      animation: slideInRight 0.8s ease-out 1.6s backwards;
    }
    
    .direction-left {
      top: 50%;
      left: 2rem;
      transform: translateY(-50%);
      animation: slideInLeft 0.8s ease-out 1.6s backwards;
    }
    
    .direction-bottom {
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: fadeIn 0.8s ease-out 1.8s backwards;
    }
    
    .direction-top {
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: fadeIn 0.8s ease-out 1.7s backwards;
    }
    
    .loading-dots {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
    }
    
    .dot {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 5px;
      border-radius: 50%;
      background-color: white;
      animation: fadeIn 0.6s infinite alternate;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    }
    
    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .dot:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    @keyframes spin3D {
      0% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      50% {
        transform: rotateY(180deg) rotateX(30deg);
      }
      100% {
        transform: rotateY(360deg) rotateX(0deg);
      }
    }
    
    @keyframes pulse3D {
      0% {
        transform: scale3d(1, 1, 1);
      }
      50% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
    
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 1s ease, visibility 1s ease;
      perspective: 1000px;
    }
    
    .overlay.hidden {
      opacity: 0;
      visibility: hidden;
    }

    .vr-loader-container {
      perspective: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    
    .vr-loader {
      width: 120px;
      height: 120px;
      position: relative;
      transform-style: preserve-3d;
      animation: spin3D 4s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    
    .vr-loader-cube {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid white;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(227, 24, 55, 0.3);
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
      animation: pulse3D 2s infinite ease-in-out;
      backdrop-filter: blur(5px);
    }
    
    .vr-loader-cube:nth-child(1) {
      transform: rotateX(90deg) translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(2) {
      transform: rotateX(-90deg) translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(3) {
      transform: rotateY(90deg) translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(4) {
      transform: rotateY(-90deg) translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(5) {
      transform: translateZ(60px);
    }
    
    .vr-loader-cube:nth-child(6) {
      transform: translateZ(-60px) rotateY(180deg);
    }
    
    .vr-loader-text {
      margin-top: 20px;
      font-size: 24px;
      color: white;
      text-transform: uppercase;
      letter-spacing: 3px;
      position: relative;
      animation: pulse 2s infinite;
    }
    
    .vr-loader-progress {
      width: 200px;
      height: 4px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }
    
    .vr-loader-progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #e31837, #ff3352);
      animation: progressAnimation 2s linear forwards;
    }
    
    @keyframes progressAnimation {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }

    .explore-button {
      position: absolute;
      right: 30px;
      top: 30px;
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 30px;
      backdrop-filter: blur(10px);
      font-size: 18px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: fadeIn 1s ease-out 1.7s backwards;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }
    
    .explore-button:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.05) translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .info-badge {
      position: absolute;
      left: 30px;
      top: 120px;
      background: rgba(25, 118, 210, 0.8);
      color: white;
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 14px;
      animation: fadeIn 1s ease-out 2s backwards;
      backdrop-filter: blur(10px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    
    .info-badge:before {
      content: '💻';
      margin-right: 8px;
      font-size: 16px;
    }
    
    .particle {
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      animation: floatParticle 10s linear infinite;
    }
    
    .social-links {
      position: absolute;
      bottom: 30px;
      right: 30px;
      display: flex;
      gap: 15px;
      animation: fadeIn 1s ease-out 2.1s backwards;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 50%;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .social-link:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.2);
    }
    
    .card-3d {
      position: absolute;
      width: 150px;
      height: 150px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      transform-style: preserve-3d;
      animation: float 15s infinite linear;
      border: 1px solid rgba(255, 255, 255, 0.1);
      opacity: 0.7;
    }
    
    .card-1 {
      top: 15%;
      left: 10%;
      animation-delay: 0s;
    }
    
    .card-2 {
      bottom: 15%;
      right: 10%;
      animation-delay: -5s;
    }
    
    .card-3 {
      top: 60%;
      left: 15%;
      animation-delay: -10s;
    }
    
    @media (max-width: 768px) {
      .title {
        font-size: 2.5rem;
      }
      
      .subtitle {
        font-size: 1.2rem;
      }
      
      .logo-container {
        width: 150px;
        height: 150px;
      }
      
      .direction-indicator {
        padding: 0.7rem;
        font-size: 0.9rem;
      }
      
      .card-3d {
        display: none;
      }
    }
  `,document.head.appendChild(e)},C=({onStartTour:e})=>{const[r,n]=l.useState([]),o=l.useRef(null),a=l.useRef(null);l.useEffect(()=>{L();const s=20,p=[];for(let f=0;f<s;f++)p.push({id:f,size:Math.random()*6+2,left:Math.random()*100,animationDuration:Math.random()*10+10,delay:Math.random()*5,translateX:(Math.random()-.5)*200});n(p)},[]);const i=s=>{if(!o.current||!a.current)return;const p=o.current,f=a.current,g=p.getBoundingClientRect(),b=(s.clientX-g.left)/g.width,v=((s.clientY-g.top)/g.height-.5)*15,w=(.5-b)*15;f.style.transform=`perspective(1000px) rotateX(${v}deg) rotateY(${w}deg)`},d=()=>{a.current&&(a.current.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)")};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"home-container",ref:o,onMouseMove:i,onMouseLeave:d,children:[r.map(s=>t.jsx("div",{className:"particle",style:{width:`${s.size}px`,height:`${s.size}px`,left:`${s.left}%`,bottom:"-10px",animationDuration:`${s.animationDuration}s`,animationDelay:`${s.delay}s`,"--translate-x":`${s.translateX}px`}},s.id)),t.jsxs("div",{className:"content",children:[t.jsxs("div",{className:"logo-container",children:[t.jsx("div",{className:"logo-glow"}),t.jsx("img",{ref:a,className:"logo",src:"/assets/360-images/logo.png",alt:"BMSIT Logo"})]}),t.jsx("div",{className:"title-container",children:t.jsx("h1",{className:"title",children:"Welcome to BMSIT Campus Tour"})}),t.jsx("p",{className:"subtitle",children:"Experience our campus in immersive 360° through this interactive virtual tour."}),t.jsx("div",{className:"button-container",children:t.jsx("button",{className:"start-button",onClick:e,children:"Start Tour"})}),t.jsxs("div",{className:"social-links",children:[t.jsx("a",{className:"social-link",href:"#","aria-label":"Facebook",children:t.jsx("svg",{width:"20",height:"20",fill:"white",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})}),t.jsx("a",{className:"social-link",href:"#","aria-label":"Instagram",children:t.jsx("svg",{width:"20",height:"20",fill:"white",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),t.jsx("a",{className:"social-link",href:"#","aria-label":"YouTube",children:t.jsx("svg",{width:"20",height:"20",fill:"white",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})})]})]})]})})};typeof AFRAME<"u"&&AFRAME.registerComponent("simple-mouse-drag-control",{init:function(){this.ifMouseDown=!1,this.x_cord=0,this.y_cord=0,this.imageContainer=this.el,this.lastInteractionTime=Date.now(),this.isAutoRotating=!1,this.autoRotationSpeed=.1,this.onMouseDown=this.onMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.checkInactivity=this.checkInactivity.bind(this),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp),this.checkInactivityInterval=setInterval(this.checkInactivity,1e3)},onMouseDown:function(e){this.ifMouseDown=!0,this.x_cord=e.clientX,this.y_cord=e.clientY,this.updateLastInteractionTime()},onMouseMove:function(e){if(this.updateLastInteractionTime(),this.isAutoRotating&&this.stopAutoRotation(),this.ifMouseDown){const r=e.clientX-this.x_cord;if(this.imageContainer){const n=this.imageContainer.getAttribute("rotation");this.imageContainer.setAttribute("rotation",{x:n.x,y:n.y+r*.2,z:n.z})}this.x_cord=e.clientX,this.y_cord=e.clientY}},onMouseUp:function(){this.ifMouseDown=!1,this.updateLastInteractionTime()},updateLastInteractionTime:function(){this.lastInteractionTime=Date.now()},checkInactivity:function(){Date.now()-this.lastInteractionTime>5e3&&!this.isAutoRotating&&this.startAutoRotation()},startAutoRotation:function(){this.isAutoRotating=!0,this.autoRotateInterval=setInterval(()=>{if(this.imageContainer){const e=this.imageContainer.getAttribute("rotation");this.imageContainer.setAttribute("rotation",{x:e.x,y:e.y+this.autoRotationSpeed,z:e.z})}},16)},stopAutoRotation:function(){this.isAutoRotating=!1,this.autoRotateInterval&&clearInterval(this.autoRotateInterval)},remove:function(){this.autoRotateInterval&&clearInterval(this.autoRotateInterval),this.checkInactivityInterval&&clearInterval(this.checkInactivityInterval),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp)}});const _=()=>{const e=document.createElement("style");e.textContent=`
    @keyframes spin3D {
      0% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      50% {
        transform: rotateY(180deg) rotateX(30deg);
      }
      100% {
        transform: rotateY(360deg) rotateX(0deg);
      }
    }
    
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
      }
      70% {
        transform: scale(1.05);
        box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.2);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }
    
    @keyframes glowText {
      0% {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(0, 153, 255, 0.6);
      }
      100% {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      }
    }
    
    @keyframes particleFloat {
      0% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0;
      }
      20% {
        opacity: 0.8;
        transform: translateY(-20px) translateX(var(--x-offset)) scale(1.2);
      }
      100% {
        transform: translateY(-120px) translateX(calc(var(--x-offset) * 3)) scale(0.5);
        opacity: 0;
      }
    }
    
    @keyframes progressGlow {
      0% {
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 15px rgba(0, 123, 255, 0.8), 0 0 20px rgba(0, 153, 255, 0.6);
      }
      100% {
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }
    }
    
    @keyframes gradientFlow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
    .loading-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #000000, #121212, #000000);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1200px;
      overflow: hidden;
    }
    
    .vr-loading-scene {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      perspective: 1000px;
      position: relative;
      z-index: 2;
    }
    
    .vr-panorama-loader {
      width: 200px;
      height: 120px;
      position: relative;
      transform-style: preserve-3d;
      animation: spin3D 12s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
      margin-bottom: 20px;
    }
    
    .vr-panorama-face {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      box-shadow: 0 0 25px rgba(0, 153, 255, 0.3);
      background-size: cover;
      background-position: center;
      opacity: 0.85;
      backdrop-filter: blur(2px);
    }
    
    .vr-panorama-face:nth-child(1) {
      transform: rotateY(0deg) translateZ(60px);
      background: linear-gradient(45deg, #0078ff, #00c6ff);
    }
    
    .vr-panorama-face:nth-child(2) {
      transform: rotateY(90deg) translateZ(60px);
      background: linear-gradient(45deg, #e31837, #ff3352);
    }
    
    .vr-panorama-face:nth-child(3) {
      transform: rotateY(180deg) translateZ(60px);
      background: linear-gradient(45deg, #0078ff, #00c6ff);
    }
    
    .vr-panorama-face:nth-child(4) {
      transform: rotateY(270deg) translateZ(60px);
      background: linear-gradient(45deg, #e31837, #ff3352);
    }
    
    .vr-panorama-face:nth-child(5) {
      transform: rotateX(90deg) translateZ(60px);
      background: linear-gradient(45deg, #2b2b2b, #3f3f3f);
    }
    
    .vr-panorama-face:nth-child(6) {
      transform: rotateX(-90deg) translateZ(60px);
      background: linear-gradient(45deg, #2b2b2b, #3f3f3f);
    }
    
    .vr-loading-text {
      font-size: 28px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      letter-spacing: 4px;
      text-align: center;
      animation: glowText 2s infinite;
      margin-bottom: 0;
    }
    
    .vr-loading-subtitle {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 8px;
      margin-bottom: 30px;
    }
    
    .vr-progress-container {
      width: 300px;
      margin-top: 10px;
      position: relative;
    }
    
    .vr-progress-bar {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      animation: progressGlow 2s infinite;
    }
    
    .vr-progress-fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #0078ff, #00c6ff, #0078ff);
      background-size: 200% auto;
      animation: gradientFlow 2s ease infinite;
      border-radius: 6px;
    }
    
    .vr-progress-text {
      position: absolute;
      right: 0;
      top: -25px;
      color: white;
      font-size: 14px;
      font-weight: bold;
    }
    
    .vr-loading-tips {
      margin-top: 40px;
      max-width: 600px;
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      background: rgba(0, 0, 0, 0.3);
      padding: 15px 20px;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
    }
    
    .vr-loading-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .vr-particle {
      position: absolute;
      bottom: 0;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
      border-radius: 50%;
      animation: particleFloat 10s ease-out infinite;
    }
    
    .vr-headset-icon {
      width: 60px;
      height: 60px;
      opacity: 0.7;
      margin-top: 30px;
      animation: float 3s ease-in-out infinite;
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
    }
  `,document.head.appendChild(e)};class A extends k.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,n){console.error("VR scene error:",r,n)}render(){return this.state.hasError?t.jsxs("div",{className:"error-container",children:[t.jsx("h2",{children:"Something went wrong with the VR scene."}),t.jsx("p",{children:this.state.error&&this.state.error.toString()}),t.jsx("button",{onClick:()=>this.props.onBackToHome(),children:"Go Back Home"})]}):this.props.children}}const P=({onBackToHome:e})=>{const[r,n]=l.useState(!0),[o,a]=l.useState(0),[i,d]=l.useState(""),[s,p]=l.useState(null),[f,g]=l.useState(!1),[b,z]=l.useState(!1),[v,w]=l.useState(!1),[$,O]=l.useState(""),N="https://panoraven.com/en/embed/jYfYXbfXoD";if(l.useEffect(()=>{_();const h=["Drag your mouse to look around in 360 degrees","For best experience, view in fullscreen mode","Move closer to objects for more detail","The tour works on mobile devices too - just tilt and move your phone","Loading high resolution panoramas for immersive experience..."];d(h[Math.floor(Math.random()*h.length)]);try{n(!0);const c=setInterval(()=>{a(x=>{const u=x+Math.random()*10;return u>=100?(clearInterval(c),100):u})},200);return setTimeout(()=>{clearInterval(c),a(100),n(!1),p(null)},3500),()=>{clearInterval(c)}}catch(c){console.error("Panorama loading error:",c),p(c.message),n(!1)}},[]),r){const h=[];for(let c=0;c<20;c++){const x=Math.random()*10+5,u=Math.random()*100,R=Math.random()*5,Y=(Math.random()-.5)*100;h.push(t.jsx("div",{className:"vr-particle",style:{width:`${x}px`,height:`${x}px`,left:`${u}%`,animationDuration:`${10+Math.random()*10}s`,animationDelay:`${R}s`,"--x-offset":`${Y}px`}},c))}return t.jsxs("div",{className:"loading-container",children:[t.jsx("div",{className:"vr-loading-particles",children:h}),t.jsxs("div",{className:"vr-loading-scene",children:[t.jsxs("div",{className:"vr-panorama-loader",children:[t.jsx("div",{className:"vr-panorama-face"}),t.jsx("div",{className:"vr-panorama-face"}),t.jsx("div",{className:"vr-panorama-face"}),t.jsx("div",{className:"vr-panorama-face"}),t.jsx("div",{className:"vr-panorama-face"}),t.jsx("div",{className:"vr-panorama-face"})]}),t.jsx("div",{className:"vr-loading-text",children:"VR Experience"}),t.jsx("div",{className:"vr-loading-subtitle",children:"Preparing Immersive Tour"}),t.jsxs("div",{className:"vr-progress-container",children:[t.jsxs("div",{className:"vr-progress-text",children:[Math.round(o),"%"]}),t.jsx("div",{className:"vr-progress-bar",children:t.jsx("div",{className:"vr-progress-fill",style:{width:`${o}%`}})})]}),t.jsx("div",{className:"vr-loading-tips",children:i}),t.jsx("svg",{className:"vr-headset-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",children:t.jsx("path",{d:"M22.5 9.5l-1.2-6.6c-.2-1-1-1.9-2-1.9H4.7c-1 0-1.8.8-2 1.9L1.5 9.5c-.3 1.8.7 3.5 2.3 4.3v3.7c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5V16h8v1.5c0 .8.7 1.5 1.5 1.5H19c.8 0 1.5-.7 1.5-1.5v-3.7c1.6-.8 2.6-2.5 2.3-4.3zM4 10.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5S4 11.3 4 10.5zM18 12c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"})})]})]})}return s?t.jsxs("div",{className:"error-container",children:[t.jsx("h2",{children:"Error loading VR scene"}),t.jsx("p",{children:s}),t.jsx("button",{onClick:e,children:"Go Back Home"})]}):t.jsx(A,{onBackToHome:e,children:t.jsxs("div",{className:"vr-container",style:{width:"100%",height:"100vh",position:"relative"},children:[t.jsx("iframe",{width:"100%",height:"100%",allowFullScreen:!0,allow:"accelerometer; magnetometer; gyroscope",style:{border:"0 none",borderRadius:"8px",boxShadow:"0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)"},src:N}),t.jsx("button",{onClick:e,style:{position:"absolute",top:"20px",left:"20px",padding:"10px 20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",zIndex:1e3},children:"Back to Home"})]})})},B=()=>{const[e,r]=l.useState(!1),n=()=>{r(!0)},o=()=>{r(!1)};return e?t.jsx(P,{onBackToHome:o}):t.jsx(C,{onStartTour:n})};S.render(t.jsx(k.StrictMode,{children:t.jsx(B,{})}),document.getElementById("root"));
//# sourceMappingURL=index-DU9wocfS.js.map
