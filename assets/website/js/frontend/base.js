(function(_w) {

    var w = _w;

    //main namespace
    G = {};
    G.Config = {

    };

    G.Fun = {
        area_refresh: function(){
            var count = G_AREA.length;
            var index = Math.floor(Math.random() * count);
            var rows = G_AREA[index];

            $('.result-box[data-type="FINANCE"]').empty();
            $.each(rows['data_config'], function(i){
                var row = rows['data_config'][i];
                var key = row['key'];
                if (key == 'FINANCE' || key == '就业 & 信用卡')
                {
                    var dl = $('<dl></dl>');
                    dl.append('<dt><h3>'+row['value']+'</h3></dt>');
                    $.each(rows['data'][key], function(j){
                        var data_row = rows['data'][key][j];
                        var dd = $('<dd></dd>');
                        dd.append('<label>'+data_row['key_name']+'</label>');
                        dd.append('<span><b>'+data_row['value']+'</b></span>');
                        dl.append(dd);
                    })

                    $('.result-box[data-type="FINANCE"]').append(dl);
                }
            });
            if ($('.result-box[data-type="FINANCE"]').text() == '')
            {
                var p = $('<p>生成错误，请刷新重新生成...</p>');
                $('.result-box[data-type="FINANCE"]').append(p);
            }

            $('.result-box[data-type="OTHER"]').empty();
            $.each(rows['data_config'], function(i){
                var row = rows['data_config'][i];
                var key = row['key'];
                if (key != 'FINANCE' && key != '就业 & 信用卡')
                {
                    var dl = $('<dl></dl>');
                    dl.append('<dt><h3>'+row['value']+'</h3></dt>');
                    $.each(rows['data'][key], function(j){
                        var data_row = rows['data'][key][j];
                        var dd = $('<dd></dd>');
                        dd.append('<label>'+data_row['key_name']+'</label>');
                        dd.append('<span><b>'+data_row['value']+'</b></span>');
                        dl.append(dd);
                    })

                    $('.result-box[data-type="OTHER"]').append(dl);
                }
            })
        },
        init: function() {
            $(".gotop").click(function(e) {
                $('body,html').animate({ scrollTop: 0 }, 500);
                return false;
            });

            G.Fun.area_refresh();
        }
    };

    $(function() {
        G.Fun.init();
    });
})();