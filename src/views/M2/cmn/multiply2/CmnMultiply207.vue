<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣和上帝的话</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美</h2>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</span></span></span></span></li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 太3:15</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>耶稣回答说：&ldquo;你暂且许我，因为我们理当这样尽诸般的义。&rdquo;于是<u class="person underline">约翰</u>许了他。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>约翰福音16章说圣灵在我们身边的人心中积极地动工，祂显明人的罪、使人渴望与上帝和好、让人不再害怕死亡（即最后的审判），并拆毁人心中对福音的反抗。而我们的工作是藉由见证的方式找到那些对福音敞开的人，并让他们认识基督。我们应当互相提醒并彼此鼓励：&ldquo;圣灵在我们行动以前，就在人的心里动工&rdquo;。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">施洗约翰勇敢地指出人的自我中心、背离神，并呼召人悔改归向神，甚至还勇于揭发君王的罪。主耶稣祂以公义、慈爱，向人认同的主彰显，让世人看见祂是成为真实人的神，并代表人受洗、受试探，藉此也指出当人离弃神就自我迷失，甚至丧失神儿子的身分，就只能膜拜情欲、魔鬼。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音4:1-13》两遍。。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音4:1-13</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>耶稣被圣灵充满，从约旦河回来，圣灵将他引到旷野，四十天受魔鬼的试探。<sup>2</sup>那些日子没有吃什么，日子满了，他就饿了。<sup>3</sup>魔鬼对他说：&ldquo;你若是　神的儿子，可以吩咐这块石头变成食物。&rdquo;<sup>4</sup>耶稣回答说：&ldquo;经上记着说：&lsquo;人活着不是单靠食物，乃是靠　神口里所出的一切话。&rsquo;&rdquo;<sup>5</sup>魔鬼又领他上了高山，霎时间把天下的万国都指给他看，<sup>6</sup>对他说：&ldquo;这一切权柄、荣华，我都要给你，因为这原是交付我的，我愿意给谁就给谁。<sup>7</sup>你若在我面前下拜，这都要归你。&rdquo;<sup>8</sup>耶稣说：&ldquo;经上记着说：当拜主你的　神，单要事奉他。&rdquo;<sup>9</sup>魔鬼又领他到耶路撒冷去，叫他站在殿顶（注：&ldquo;顶&rdquo;原文作&ldquo;翅&rdquo;）上，对他说：&ldquo;你若是　神的儿子，可以从这里跳下去；<sup>10</sup>因为经上记着说：&lsquo;主要为你吩咐他的使者保护你。<sup>11</sup>他们要用手托着你，免得你的脚碰在石头上。&rsquo;&rdquo;<sup>12</sup>耶稣对他说：&ldquo;经上说：&lsquo;不可试探主你的　神。&rsquo;&rdquo;<sup>13</sup>魔鬼用完了各样的试探，就暂时离开耶稣。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/207.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音4:1-13&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">在这段经文中，你对耶稣的神性或人性有何认识？</li>
	</ul>
	</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<ul class="up">
	<li class="up"><strong>故事重述</strong>

	<ul class="up">
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">耶稣被引到旷野，受魔鬼各种试探。四十天期满，魔鬼再次来到祂面前。此时，耶稣的身体非常虚弱、疲累和饥饿。魔鬼以攻击上帝真理的方式试探耶稣，这也是最初用来试探亚当和夏娃的方式（<span class="popup-link" @click = "popUp('pop3')"> 创世记3</span>章）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<h3>始祖被诱惑</h3>

	<p><sup class="versenum">1 </sup>耶和华神所造的，唯有蛇比田野一切的活物更狡猾。蛇对女人说：&ldquo;神岂是真说，不许你们吃园中所有树上的果子吗？&rdquo;<sup class="versenum">2&nbsp;</sup>女人对蛇说：&ldquo;园中树上的果子我们可以吃，<sup class="versenum">3&nbsp;</sup>唯有园当中那棵树上的果子，神曾说：&lsquo;你们不可吃，也不可摸，免得你们死。&rsquo;&rdquo;<sup class="versenum">4&nbsp;</sup>蛇对女人说：&ldquo;你们不一定死！<sup class="versenum">5&nbsp;</sup>因为神知道你们吃的日子眼睛就明亮了，你们便如神能知道善恶。&rdquo;</p>

	<h3>违背主命</h3>

	<p><sup class="versenum">6&nbsp;</sup>于是女人见那棵树的果子好做食物，也悦人的眼目，且是可喜爱的，能使人有智慧，就摘下果子来吃了；又给她丈夫，她丈夫也吃了。<sup class="versenum">7&nbsp;</sup>他们二人的眼睛就明亮了，才知道自己是赤身露体，便拿无花果树的叶子，为自己编做裙子。<sup class="versenum">8&nbsp;</sup>天起了凉风，耶和华神在园中行走，那人和他妻子听见神的声音，就藏在园里的树木中，躲避耶和华神的面。<sup class="versenum">9&nbsp;</sup>耶和华神呼唤那人，对他说：&ldquo;你在哪里？&rdquo;<sup class="versenum">10&nbsp;</sup>他说：&ldquo;我在园中听见你的声音，我就害怕，因为我赤身露体。我便藏了。&rdquo;<sup class="versenum">11&nbsp;</sup>耶和华说：&ldquo;谁告诉你赤身露体呢？莫非你吃了我吩咐你不可吃的那树上的果子吗？&rdquo;<sup class="versenum">12&nbsp;</sup>那人说：&ldquo;你所赐给我与我同居的女人，她把那树上的果子给我，我就吃了。&rdquo;<sup class="versenum">13&nbsp;</sup>耶和华神对女人说：&ldquo;你做的是什么事呢？&rdquo;女人说：&ldquo;那蛇引诱我，我就吃了。&rdquo;<sup class="versenum">14&nbsp;</sup>耶和华神对蛇说：&ldquo;你既做了这事，就必受咒诅，比一切的牲畜野兽更甚！你必用肚子行走，终身吃土。<sup class="versenum">15&nbsp;</sup>我又要叫你和女人彼此为仇，你的后裔和女人的后裔也彼此为仇，女人的后裔要伤你的头，你要伤他的脚跟。&rdquo;<sup class="versenum">16&nbsp;</sup>又对女人说：&ldquo;我必多多加增你怀胎的苦楚，你生产儿女必多受苦楚。你必恋慕你丈夫，你丈夫必管辖你。&rdquo;<sup class="versenum">17&nbsp;</sup>又对<u class="person underline">亚当</u>说：&ldquo;你既听从妻子的话，吃了我所吩咐你不可吃的那树上的果子，地必为你的缘故受咒诅，你必终身劳苦，才能从地里得吃的。<sup class="versenum">18&nbsp;</sup>地必给你长出荆棘和蒺藜来，你也要吃田间的菜蔬。<sup class="versenum">19&nbsp;</sup>你必汗流满面才得糊口，直到你归了土，因为你是从土而出的。你本是尘土，仍要归于尘土。&rdquo;<sup class="versenum">20&nbsp;</sup><u class="person underline">亚当</u>给他妻子起名叫<u class="person underline">夏娃</u>，因为她是众生之母。<sup class="versenum">21&nbsp;</sup>耶和华神为<u class="person underline">亚当</u>和他妻子用皮子做衣服给他们穿。</p>

	<p><sup class="versenum">22&nbsp;</sup>耶和华神说：&ldquo;那人已经与我们相似，能知道善恶。现在恐怕他伸手又摘生命树的果子吃，就永远活着。&rdquo;<sup class="versenum">23&nbsp;</sup>耶和华神便打发他出伊甸园去，耕种他所自出之土。<sup class="versenum">24&nbsp;</sup>于是把他赶出去了，又在伊甸园的东边安设基路伯和四面转动发火焰的剑，要把守生命树的道路。</p>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	耶稣向我们示范如何使用上帝的应许来对付魔鬼的攻击。</li>
</ul>

<p class="up">（进深学习：<span class="popup-link" @click = "popUp('pop2')"> 太4:1-11</span>）</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">1 </sup>当时，耶稣被圣灵引到旷野，受魔鬼的试探。<sup class="versenum">2&nbsp;</sup>他禁食四十昼夜，后来就饿了。<sup class="versenum">3&nbsp;</sup>那试探人的进前来，对他说：&ldquo;你若是神的儿子，可以吩咐这些石头变成食物！&rdquo;<sup class="versenum">4&nbsp;</sup>耶稣却回答说：&ldquo;经上记着说：&lsquo;人活着不是单靠食物，乃是靠神口里所出的一切话。&rsquo;&rdquo;<sup class="versenum">5&nbsp;</sup>魔鬼就带他进了圣城，叫他站在殿顶上，<sup class="versenum">6&nbsp;</sup>对他说：&ldquo;你若是神的儿子，可以跳下去！因为经上记着说：&lsquo;主要为你吩咐他的使者用手托着你，免得你的脚碰在石头上。&rsquo;&rdquo;<sup class="versenum">7&nbsp;</sup>耶稣对他说：&ldquo;经上又记着说：&lsquo;不可试探主你的神。&rsquo;&rdquo;<sup class="versenum">8&nbsp;</sup>魔鬼又带他上了一座最高的山，将世上的万国与万国的荣华都指给他看，<sup class="versenum">9&nbsp;</sup>对他说：&ldquo;你若俯伏拜我，我就把这一切都赐给你。&rdquo;<sup class="versenum">10&nbsp;</sup>耶稣说：&ldquo;<u class="person underline">撒旦</u>，退去吧！因为经上记着说：&lsquo;当拜主你的神，单要侍奉他。&rsquo;&rdquo;<sup class="versenum">11&nbsp;</sup>于是魔鬼离了耶稣，有天使来伺候他。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路4:5</p>

<p class="forward bible">耶稣被圣灵充满，从约旦河回来，圣灵将他引到旷野，四十天受魔鬼的试探。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">根据上述查考的经文，你认为魔鬼试探人的目的是什么？牠诱惑人的手段有什么？与耶稣受的试探相比较，我们现代人所受的试探又有何异同？</li>
	<li class="forward">面对三次的试探，主耶稣都是如何胜过的？这如何应用在我们身上？三次试探间有什么相同处？不同处？</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在你挣扎&ldquo;肯不肯遵行神的话？&rdquo;，或忘记&ldquo;神真是那位供给者？&rdquo;，或怀疑&ldquo;神是否真的与我同在？&rdquo;的试探时，每天花时间更多去思想耶稣那敬畏神、彻底顺服在天父旨意心志的榜样，存感恩的心并依靠圣灵去胜过。</li>
	<li class="forward">列下这段时间你正面对哪方面的试探。若得罪了神，马上向神认罪；求圣灵赐你运用神的话语及神所赐的智慧来分辨、靠着基督的信心、有能力去面对和胜过。</li>
	<li style="text-align:justify"><span><span><span lang="ZH-CN">也为哪些你所知道正在受试探、怀疑神，甚至要离开神的弟兄姐妹祷告，求圣灵刚强他们，使他们心里的力量刚强起来，重拾起初爱主的心。</span></span></span></li>
	<li class="forward">依照你今天所学到的，写下一个 &ldquo;届时我会&rdquo; 的宣告，并于组内分享。</li>
</ul>

<p class="indent2">我在________________（时间/地点）将会__________________（对象/事情）。</p>

<ul class="forward">
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<p><span><span><span lang="ZH-CN">亲爱的天父，从主耶稣胜过试探的事上，我们看到祂并没有其他资源，也没有运用超能力，祂只用圣经。祂熟悉并正确了解圣经，使祂胜过试探。我们看到魔鬼也熟悉圣经， 但牠却是扭曲圣经来诱惑人远离祢。牠总是利用物质、权力、虚荣等来诱惑人，挑动人肉体、眼目的情欲及今生的骄傲，千百年来都如出一辙。天父啊，帮助我们对圣经熟悉，在生活中运用祢的话来抵挡魔鬼的诱惑；并将信心放在祢的身上，以祢为我们最大的满足，坚信</span><span lang="ZH-CN">祢永远</span><span lang="ZH-CN">与我们同在，并没有离弃我们。奉主耶稣得胜的名求，阿们！</span></span></span></p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->