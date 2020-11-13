
$(function () {


    // 画像の配列
    var images = [
        'img/img01.png',
        'img/img02.png',
        'img/img03.png',
        'img/img04.png',
        'img/img05.png',
        'img/img06.png',    
        'img/img07.png',
        'img/img08.png',
        'img/img09.png',
        'img/img10.png'
    ];


    // 画像に対する解答の配列
    var answers = [
        "ガーナ",
        "ウガンダ",
        "セネガル",
        "アンゴラ",
        "カメルーン",
        "コートジボワール",
        "エジプト",
        "ケニア",
        "南アフリカ",
        "タンザニア"
    ]

    $(".title,.choicebox").hide(); //問題文と選択肢は隠しておく
    

    // 画像の選択と解答の設定

    $(".start").on("click",function(){

        $(".result").html("") //解答結果が出ている場合があるので表示を消す

        var randNo = Math.floor(Math.random()*images.length) //ランダム関数の設定

        console.log(images.length)
        console.log(randNo)

        // ランダム関数に応じて画像の設定
        var randImg = images[randNo];
        $('.random').attr('src', randImg);
    
        // ランダム関数に応じての解答の設定
        var thisanswer = answers[randNo];

        console.log(randImg);
        console.log(thisanswer);

        $(".title,.choicebox").show(); //選択肢を出す

        $(".choicearea > p").css("background-color",""); //選択肢の色がグレーになっている場合があるので元に戻す

        // 選択肢1を押した時のアクション
        $(".choices1").off("click");
        $(".choices1").on("click",function(){
            var yourvalue = $(".choices1").html();
            console.log(yourvalue);
            // console.log(randImg);
            // console.log(thisanswer);

            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices1").css("background-color","#c0c0c0");
            }

        });

        // 選択肢2を押した時のアクション
        $(".choices2").off("click");
        $(".choices2").on("click",function(){
            var yourvalue = $(".choices2").html();
            console.log(yourvalue);
        
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices2").css("background-color","#c0c0c0");
            }

        
        });

        // 選択肢3を押した時のアクション
        $(".choices3").off("click");
        $(".choices3").on("click",function(){
            var yourvalue = $(".choices3").html();
            console.log(yourvalue);
            
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices3").css("background-color","#c0c0c0");
            }

            
        });
            
        // 選択肢4を押した時のアクション
        $(".choices4").off("click");
        $(".choices4").on("click",function(){
            var yourvalue = $(".choices4").html();
            console.log(yourvalue);
            
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices4").css("background-color","#c0c0c0");
            }

            
        });

        // 選択肢5を押した時のアクション
        $(".choices5").off("click"); 
        $(".choices5").on("click",function(){
            var yourvalue = $(".choices5").html();
            console.log(yourvalue);
            
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices5").css("background-color","#c0c0c0");
            }

            
        });

        // 選択肢6を押した時のアクション
        $(".choices6").off("click");    
        $(".choices6").on("click",function(){
            var yourvalue = $(".choices6").html();
            console.log(yourvalue);
            
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices6").css("background-color","#c0c0c0");
            }

            
        });

        // 選択肢7を押した時のアクション
        $(".choices7").off("click");  
        $(".choices7").on("click",function(){
            var yourvalue = $(".choices7").html();
            console.log(yourvalue);
            
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices7").css("background-color","#c0c0c0");
            }

            
        });
            

        // 選択肢8を押した時のアクション
        $(".choices8").off("click");
        $(".choices8").on("click",function(){
            var yourvalue = $(".choices8").html();
            console.log(yourvalue);
            
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices8").css("background-color","#c0c0c0");
            }

            
        });
            
        // 選択肢9を押した時のアクション
        $(".choices9").off("click");
        $(".choices9").on("click",function(){
            var yourvalue = $(".choices9").html();
            console.log(yourvalue);
            
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices9").css("background-color","#c0c0c0");
            }

            
        });
            
        // 選択肢10を押した時のアクション
        $(".choices10").off("click");
        $(".choices10").on("click",function(){
            var yourvalue = $(".choices10").html();
            console.log(yourvalue);
            
            if(thisanswer == yourvalue){
                // alert("正解");
                console.log("正解")
                $(".result").html('<img src="img/img_OK.png" alt="画像" />');
            }else{
                // alert("不正解");
                console.log("不正解")
                $(".result").html('<img src="img/img_NG.png" alt="画像" />');
                $(".choices10").css("background-color","#c0c0c0");
            }

            
        });


    })

});



    