var myApp = (function () {	
    var public={};
    var exemplaryText="Lorem ipsum dolor sit amet, consectetuer \n\
    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet\n\
     dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,\n\
     quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut \n\
    aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in\n\
     hendrerit in vulputate velit esse molestie consequat, vel illum \n\
    dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto\n\
     odio dignissim qui blandit praesent luptatum zzril delenit augue \n\
    duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta \n\
    nobis eleifend option congue nihil imperdiet doming id quod mazim \n\
    placerat facer possim assum.";
    var sawDescription1="Miasto i gmina w północno-zachodniej Polsce, \n\
    w województwie wielkopolskim, siedziba powiatu pilskiego. Położone na\n\
     pograniczu Pojezierza Wałeckiego i Pojezierza Krajeńskiego, \n\
    nad Gwdą, około 11 km powyżej jej ujścia do Noteci. Liczy 74 471\n\
     mieszkańców[2], co daje jej 51. pozycję w kraju i 4. w województwie.";
    var sawDescription2="Samodzielne narzędzie lub część urządzenia\n\
    w formie ząbkowanego ostrza służące do przerzynania materiałów\n\
    takich jak drewno, kamień, metal i innych ciał stałych. Ostrze\n\
    to wprawiane jest w ruch w zależności od rodzaju piły, np. za\n\
    pomocą mięśni lub energii elektrycznej, parowej czy wodnej.";
    var sawDescription3="Gatunek dwuśrodowiskowej ryby \n\
    chrzęstnoszkieletowej z rodziny piłowatych (Pristidae).";

    public.init = function(){
        
        //tree1- defining nodes
        var sawNode1=new panelsPlugin.PanelCodeNode("Piła", sawDescription1,
            "images/pila-miasto.jpg",
            "miasto");
        var sawNode2=new panelsPlugin.PanelCodeNode("Piła", sawDescription2,
            "images/pila-narzedzie.jpg",
            "narzędzie");
        var sawNode3=new panelsPlugin.PanelCodeNode("Piła", sawDescription3,
            "images/pila-ryba.jpg",
            "ryba");
        //tree1-root node
        var sawTreeParent=new panelsPlugin.PanelChoicesNode("tytul parent", "wybierz rodzaj piły","",
            sawNode1,sawNode2,sawNode3);
        //tree1-constructor for entire structure
        new panelsPlugin.PanelContainer(sawTreeParent,"#wrapperForPanels1");
        
        //tree2- defining nodes (third subtree)
        var node8=new panelsPlugin.PanelCodeNode("znane wymiary", exemplaryText,
            "images/ik12.png",
            "lorem ipsum dolor sit amet");
        var node9=new panelsPlugin.PanelCodeNode("nieznane wymiary", exemplaryText,
            "images/ik13.png",
            "lorem ipsum dolor sit amet");
        var node3=new panelsPlugin.PanelChoicesNode("w pionie i poziomie", "jakie są wymiary",
            "images/ik3.png",
            "centrowanie elementu zarówno w osi pionowej jak i poziomej",
            node8,node9);
        //tree2- defining nodes (second subtree)
        var node12=new panelsPlugin.PanelCodeNode("jedna linia", exemplaryText,
            "images/ik8.png",
            "lorem ipsum dolor sit amet");
        var node13=new panelsPlugin.PanelCodeNode("wiele linii", exemplaryText,
            "images/ik9.png",
            "lorem ipsum dolor sit amet");
        var node14= new panelsPlugin.PanelCodeNode("znana wysokość", exemplaryText,
            "images/ik10.png",
            "lorem ipsum dolor sit amet");
        var node15=new panelsPlugin.PanelCodeNode("nieznana wysokość", exemplaryText,
            "images/ik11.png","opis pionowo blokowy nieznana");
        var node6=new panelsPlugin.PanelChoicesNode("element liniowy", "ile linii","images/ik8.png",
            "np. &lt;span&gt; &lt;img&gt; &lt;a&gt; &lt;b&gt;",
            node12,node13);
        var node7=new panelsPlugin.PanelChoicesNode("element blokowy", "jaka wysokosc","images/ik5.png",
            "np. &lt;div&gt; &lt;p&gt; &lt;h1&gt; &lt;ul&gt; &lt;li&gt;",
            node14,node15);
        var node2=new panelsPlugin.PanelChoicesNode("w pionie", "rodzaj elementu","images/ik2.png",
            "centrowanie elementu w osi pionowej",
            node6,node7);
        //tree2- defining nodes (first subtree)
        var node10=new panelsPlugin.PanelCodeNode("jeden element blokowy", exemplaryText,
            "images/ik6.png",
            "lorem ipsum dolor sit amet");
        var node11=new panelsPlugin.PanelCodeNode("kilka elementów blokowych", exemplaryText,
            "images/ik7.png",
            "lorem ipsum dolor sit amet");
        var node4=new panelsPlugin.PanelCodeNode("element liniowy", exemplaryText,"images/ik8.png",
            "np. &lt;span&gt; &lt;img&gt; &lt;a&gt; &lt;b&gt;");
        var node5=new panelsPlugin.PanelChoicesNode("element blokowy", "ilość bloków","images/ik5.png",
            "np. &lt;div&gt; &lt;p&gt; &lt;h1&gt; &lt;ul&gt; &lt;li&gt;",
            node10,node11);
        var node1=new panelsPlugin.PanelChoicesNode("w poziomie", "rodzaj elementu","images/ik1.png",
            "centrowanie elementu w osi poziomej",
            node4,node5);
        //tree2-root node
        var parentObject=new panelsPlugin.PanelChoicesNode("tytul parent", "orientacja centrowania","",
            node1,node2,node3);
        //tree2-constructor for entire structure
        new panelsPlugin.PanelContainer(parentObject,"#wrapperForPanels2");
    };

    return public;
})();

$(function() {

    myApp.init();

});