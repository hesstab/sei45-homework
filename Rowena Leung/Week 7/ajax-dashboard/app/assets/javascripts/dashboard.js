$(document).ready(function(){
  const fetchInfo = function (){
    $.getJSON('/api/info').done(function(t){
      $('#brother').text(t.brother);
      $('#time').text(t.time);
      $('#uptime').text(t.uptime);
    })
  }



  // const fetchBrother = function(){
  //   $.get('/api/brother').done(function(b){
  //     $('#brother').text(b);
  //   });
  // };
  // setInterval(fetchBrother, 4000);
  //
  //
  // const fetchTime = function(){
  //   $.get('/api/time').done(function(t){
  //     $('#time').text(t)
  //   })
  // }
  // setInterval(fetchTime, 1000)
  // const fetchUptime = function(){
  //   $.get('/api/uptime').done(function(ut){
  //     $('#uptime').text(ut)
  //   })
  // }
  setInterval(fetchInfo, 2000);
});
