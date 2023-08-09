import React from "react";
import "./Project2.css"; import Image from "./download.jpg";

export default function Project2(){
    return(
        <div className="pro-2">

<h1>Sarah's Favorite Animal</h1>
        <table>
          <tbody>
            <tr>
              <td>Home</td>
              <td>Fun Facts</td>
            </tr>
          </tbody>
        </table>
        <img src="{Image}" width="200px" alt="moose" />
          <p>My name is Sarah, and my favorite animal is the moose. They can be up to 6.5 feet tail and weigh 1200 pound. Surprisingly, they're really good at swimming!</p>
          <p>If you want to learn more about the moose, check out <a href="https://en.wikipedia.org/wiki/Alaska_moose">its Wikipedia page.</a></p>
        
        <h2>Moose are awsesome because...</h2>
        <ol start="1">
            <li>They can swim really well</li>
            <li>They can make really funny noises</li>
            <li>They can close their nostrils</li>
        </ol>
        <h2>If I were a moose, I would...</h2>
        <ul>
            <li>Eat lots of lettuce</li>
            <li>Carry litle animals on my antlers</li>
            <li>Swim to Alaska</li>
        </ul>
        <h2>Moose Video</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/F3yse7vTWrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <hr/></div>
    )
}