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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>16.</h1></div>
                        <div class="chapter_title ltr"><h1>保罗遇见耶稣归向主——神呼召工人</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒8:38</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup>于是吩咐车站住，<u class="person underline">腓利</u>和太监二人同下水里去，<u class="person underline">腓利</u>就给他施洗。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final" style="text-align:justify">虽然主的使命是&ldquo;直到地极&rdquo;的使命，但是门徒还不愿意离开耶路撒冷，不愿意走出去。耶路撒冷的教会大遭逼迫，把门徒都推出去了。除了使徒以外，门徒都分散在犹太和撒玛利亚各处。逼迫不一定是恶者撒但的计谋，逼迫也可能是神的安排。神按照祂神圣的旨意，容许逼迫临到，为要成就他的美意。逼迫的结果：&ldquo;那些分散的人往各处去传道。&rdquo; (<span class="popup-link" @click = "popUp('pop2')"> 徒8:4</span>)

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>那些分散的人往各处去传道。</p>
	<!-- end bible --></div>
	逼迫之前，留在耶路撒冷；逼迫分散之后，往各处去传道。被逼分散的信徒，并没有自哀自怜，躲藏起来，而是到了何处，就在何处积极地传讲主的道。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">在撒玛利亚的大丰收之后，圣灵引导腓利南下旷野，在不见人烟的路上，腓利遇见了 一位来自衣索匹亚王宫的太监，这位对犹太教表示出敬虔的外邦人正在旅途中阅读以赛亚书，腓利把握机会对这位一头雾水的太监讲解先知的预言，茅塞顿开的太监立刻领受了这道并且受了洗，而腓利当下被主的灵提去，之后出现在别的地方继续宣扬福音。</p>

<p class="indent2">在第七和八章中司提反及腓利已经为教会的普世宣教事工做好了准备，路加在第九、十章中继续告诉我们两个非常特别的归主故事，一是关于大数的扫罗，他后来成为向外邦人传道的使徒；二是关于百夫长哥尼流，他是第一个归主的外邦人。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒9:1-19》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒9:1-19</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>扫罗仍然向主的门徒口吐威吓凶杀的话，去见大祭司，<sup>2</sup>求文书给大马士革的各会堂，若是找著信奉这道的人，无论男女，都准他捆绑带到耶路撒冷。<sup>3</sup>扫罗行路，将到大马士革，忽然从天上发光，四面照著他。<sup>4</sup>他就仆倒在地，听见有声音对他说：&ldquo;扫罗，扫罗！你为甚么逼迫我？&rdquo;<sup>5</sup>他说：&ldquo;主啊，你是谁？&rdquo;主说：&ldquo;我就是你所逼迫的耶稣。<sup>6</sup>起来！进城去，你所当做的事，必有人告诉你。&rdquo;</p>

<p><sup>7</sup>同行的人站在那里，说不出话来，听见声音，却看不见人。<sup>8</sup>扫罗从地上起来，睁开眼睛，竟不能看见甚么。有人拉他的手，领他进了大马士革。<sup>9</sup>三日不能看见，也不吃，也不喝。</p>

<p><sup>10</sup>当下，在大马士革有一个门徒，名叫亚拿尼亚。主在异象中对他说：&ldquo;亚拿尼亚。&rdquo;他说：&ldquo;主，我在这里。&rdquo;<sup>11</sup>主对他说：&ldquo;起来！往直街去，在犹大的家里，访问一个大数人，名叫扫罗，他正祷告；<sup>12</sup>又看见了一个人，名叫亚拿尼亚，进来按手在他身上，叫他能看见。&rdquo;<sup>13</sup>亚拿尼亚回答说：&ldquo;主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒，<sup>14</sup>并且他在这里有从祭司长得来的权柄，捆绑一切求告你名的人。&rdquo;<sup>15</sup>主对亚拿尼亚说：&ldquo;你只管去。他是我所拣选的器皿，要在外邦人和君王并以色列人面前宣扬我的名。<sup>16</sup>我也要指示他，为我的名必须受许多的苦难。&rdquo;<sup>17</sup>亚拿尼亚就去了，进入那家，把手按在扫罗身上说：&ldquo;兄弟扫罗，在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。&rdquo;<sup>18</sup>扫罗的眼睛上好像有鳞立刻掉下来，他就能看见，于是起来受了洗，<sup>19</sup>吃过饭就健壮了。扫罗和大马士革的门徒同住了些日子，</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/316.mp4" type="button" class="external-movie">
         观看&nbsp;徒9:1-19&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作门徒？</li>
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
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">腓利传讲福音，去使人作门徒及建立教会的同时，扫罗持续迫害离开耶路撒冷的信徒，到各城去追捕他们。他大发热心，逼迫教会，因为认为这样做是在服事上帝。有些信徒逃到大马士革城里。这个外国城市在耶路撒冷240公里外的地方，需要一周的时间才能到达。扫罗前往大马士革的路上，耶稣主动向扫罗显现祂自己。憎恨耶稣的扫罗从一个既无畏又愤怒的胜利者，变成一个既瞎眼又卑微的人，需要人带领他。耶稣与祂的儿女是如此紧密地联合，以致信徒遭到迫害就如同是自己遭到迫害一样。扫罗终于明白，虽然他为上帝大发热心，但是他所相信的是错的。耶稣也向亚拿尼亚显现。虽然亚拿尼亚心中对去找扫罗的命令存疑，他还是跨出信心的脚步服从耶稣。主使用他医好保罗，并立刻为保罗施洗。我们在此看见一个没有领袖职分的门徒，立即为新信徒施洗。（阅读<span class="popup-link" @click = "popUp('pop3')"> 太28:18-20</span>）</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">18&nbsp;</sup>耶稣进前来，对他们说：&ldquo;天上地下所有的权柄都赐给我了。<sup class="versenum">19&nbsp;</sup>所以你们要去，使万民做我的门徒，奉父、子、圣灵的名给他们施洗，<sup class="versenum">20&nbsp;</sup>凡我所吩咐你们的，都教训他们遵守。我就常与你们同在，直到世界的末了。&rdquo;</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒9:15</p>

<p class="forward bible">主对亚拿尼亚说：&ldquo;你只管去。他是我所拣选的器皿，要在外邦人和君王并以色列人面前宣扬我的名。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你是如何信主的？有什么样的属灵历程，使你属灵生命有所成长？你会不会羡慕像保罗或某某人那样信主的经历？为什么？</li>
	<li class="forward">今天，上帝托付给你的使命是什么？你如何得知、如何执行？</li>
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
	<li class="forward">在《信徒动员表》里写下2位你在教会认识多时，但没有深谈的。这周找一个时间请他们分享信主的经历和最大的改变，同时你也分享你信主的经历，彼此鼓励和代祷。</li>
	<li class="forward">在《福音行动表》列下那些目前反对、取笑和攻击你信仰的人。为他们祷告，求主怜悯和赦免他们，因为他们所做的他们不知道。求主得着他们，甚至有一天他们可以成为被主耶稣大大使用的人。</li>
	<li class="forward">未来一周，找时间评估你带领《初信栽培》的门徒生命。他们若预备好接受洗礼，请与教会牧者沟通并安排洗礼事宜，并在洗礼前安排时间与他们学习《洗礼课程》。</li>
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

<ul class="forward">
	<li class="forward">愿人都尊主的名为圣，愿神的国降临，愿神的旨意行在地上，如同行在天上。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为更多的教会看到培训领袖的重要性，弟兄姐妹也愿意花时间付代价，接受传福音的训练装备，成为被主使用和差派到各地的福音使者。</li>
	<li class="forward">为那些逼迫基督徒的，求主亲自擒拿他们，使他们生命反转，被主大大使用。</li>
	<li class="forward">为初信者祷告，求神保守那栽在他们心中的道，能长出30、60甚至百倍的果子，也求主使用你来造就初信者，陪伴他们属灵生命的成长，一起效法基督生命。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->