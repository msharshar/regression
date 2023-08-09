$(document).ready(function(){

    $('#draw').click(function(){
        var x_axes = $('#x_axes').val();
        var y_axes = $('#y_axes').val();
    
        // X_axes = x_axes.split(',');
        // y_axes = y_axes.split(',');
    
        x_axes = x_axes.split(',').map(Number);
        y_axes = y_axes.split(',').map(Number);

        pairs = [];
        x_axes.forEach((x, index) => {
            const y = y_axes[index];
            pairs.push({x, y});
        });
    

        function linearRegression(y,x){
            var lr = {};
            var n = y.length;
            var sum_x = 0;
            var sum_y = 0;
            var sum_xy = 0;
            var sum_xx = 0;
            var sum_yy = 0;
    
            for (var i = 0; i < y.length; i++) {
    
                sum_x += x[i];
                sum_y += y[i];
                sum_xy += (x[i]*y[i]);
                sum_xx += (x[i]*x[i]);
                sum_yy += (y[i]*y[i]);
            } 
    
            lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
            lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
            lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);
    
            return lr;
        }

        var lr = linearRegression(y_axes, x_axes);

        var i = 0;
        var y;
        lr_pairs = [];
        while (i <= x_axes.length) {
            x = x_axes[i];
            y = lr['slope']*x + lr['intercept'];
            lr_pairs.push({x, y});
            i++;
        }
        console.log(lr_pairs);


        var ctx = document.getElementById('myChart').getContext('2d');
        var scatterChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Real values',
                    data: pairs,
                    borderColor: [
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(52, 152, 219, 1)',
                    ],
                    pointBorderWidth: [
                        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 
                        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 
                        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 
                    ],
                },
                {
                    label: 'Linear regression',
                    data: lr_pairs,
                    type: 'line',
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                    ],
                    borderColor: [
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(231, 76, 60, 1)',
                    ],
                    pointBorderWidth: [
                        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 
                        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 
                        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 
                    ]
                }
            ]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });

        $('.curves').fadeIn(1500);

        $('html, body').animate({
            scrollTop: $(".curves").offset().top
        }, 1000);

        curve_data = '<p>y='+lr['slope']+'x+' + lr['intercept']+'</p><p>r<sup>2</sup>= '+lr['intercept']+'</p>';
    
        $('#curve_data').empty();
        $('#curve_data').append(curve_data);
    });

    $('#draw_again').click(function(){

        $('html, body').animate({
            scrollTop: $(".home").offset().top
        }, 1000);
        $('.curves').fadeOut(2000);
    });
    
});