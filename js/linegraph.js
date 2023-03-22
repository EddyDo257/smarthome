$(document).ready(function(){
	$.ajax({
		url : "http://localhost/gas/followersdata.php",
		type : "GET",
		 success : function(data){
      console.log(data);
      

      var userid = [];
      var phase_A1 = [];
      var phase_B1 = [];
      var phase_C1 = [];

      for(var i in data) {
        userid.push( data[i].Created_at);
        phase_A1.push(data[i].phase_A);
        phase_B1.push(data[i].phase_B);
        phase_C1.push(data[i].phase_C);
        //console.log(phase_A1);
      }

      var chartdata = {
        labels: userid,
        datasets: [
          {
            label: "First DustBin",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(59, 89, 152, 0.75)",
            borderColor: "rgba(59, 89, 152, 1)",
            pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
            pointHoverBorderColor: "rgba(59, 89, 152, 1)",
            data: phase_A1
          },
          {
            label: "Second DustBin",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(29, 202, 255, 0.75)",
            borderColor: "rgba(29, 202, 255, 1)",
            pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
            pointHoverBorderColor: "rgba(29, 202, 255, 1)",
            data: phase_B1
          },
          {
            label: "Third DustBin",
            fill: false,
            lineTension: 0.10,
            backgroundColor: "rgba(211, 72, 54, 0.75)",
            borderColor: "rgba(211, 72, 54, 1)",
            pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
            pointHoverBorderColor: "rgba(211, 72, 54, 1)",
            data: phase_C1
          }
        ]
      };
      var ctx = $("#mycanvas");

      var LineGraph = new Chart(ctx, {
        type: 'line',
        data: chartdata
      });
    },
    error : function(data) {

    }
  });

});
  