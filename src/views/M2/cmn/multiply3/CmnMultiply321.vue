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
                        <div class="chapter_number ltr"><h1>21.</h1></div>
                        <div class="chapter_title ltr"><h1>彼得分享宣教见证——众赞同宣教</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒10:45-46</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">45&nbsp;</sup>那些奉割礼、和<u class="person underline">彼得</u>同来的信徒，见圣灵的恩赐也浇在外邦人身上，就都稀奇，<sup class="versenum">46&nbsp;</sup>因听见他们说方言，称赞神为大。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">彼得向哥尼流传讲和平的福音，这是救恩历史中划时代的事件，有着极为重大的意义。因为救恩临到外邦人，与临到犹太人时（五旬节）同样有圣灵的印证。这印证显明了神的旨意，就是救恩不分种族，外邦人照样可以得救，没有种族的区别，只要相信就能得救。而既然神已经叫他们领受了圣灵的洗，他们应该领受洗礼。这之后，彼得为他们施洗，并与他们同住&mdash;&mdash;彼得完全的认同了外邦人在神的救恩之前有平等的地位。这些外邦人都没有被要求先作犹太人（受割礼），然后才能作基督徒。整件事中，我们看到神自己是推动者，使徒只是他手中的器皿，成就祂的美意。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">旧约禁止犹太人吃不洁净的食物(利十一章)，外邦人则不受食物典章的限制。此项饮食条例的设立用意在使犹太人和外邦人有所分别，归神为圣。犹太人因不知外邦人的食物来源，为免误食不洁之物，故从来不跟外邦人一起吃饭。</p>

<ul>
	<li class="flush"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒11:1-18》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒11:1-18</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>使徒和在犹太的众弟兄听说外邦人也领受了　神的道。<sup>2</sup>及至彼得上了耶路撒冷，那些奉割礼的门徒和他争辩说：<sup>3</sup>&ldquo;你进入未受割礼之人的家，和他们一同吃饭了。&rdquo;</p>

<p><sup>4</sup>彼得就开口把这事挨次给他们讲解，说：<sup>5</sup> &ldquo;我在约帕城里祷告的时候，魂游象外，看见异象，有一物降下，好像一块大布，系著四角，从天缒下，直来到我跟前。<sup>6</sup>我定睛观看，见内中有地上四足的牲畜和野兽、昆虫并天上的飞鸟。<sup>7</sup>我且听见有声音向我说：&lsquo;彼得，起来，宰了吃！&rsquo;<sup>8</sup>我说：&lsquo;主啊，这是不可的！凡俗而不洁净的物从来没有入过我的口。&rsquo;<sup>9</sup>第二次，有声音从天上说：&lsquo; 神所洁净的，你不可当作俗物。&rsquo;<sup>10</sup>这样一连三次，就都收回天上去了。<sup>11</sup>正当那时，有三个人站在我们所住的房门前，是从凯撒利亚差来见我的。<sup>12</sup>圣灵吩咐我和他们同去，不要疑惑（注：或作&ldquo;不要分别等类&rdquo;）。同著我去的，还有这六位弟兄，我们都进了那人的家。<sup>13</sup>那人就告诉我们，他如何看见一位天使站在他屋里，说：&lsquo;你打发人往约帕去，请那称呼彼得的西门来，<sup>14</sup>他有话告诉你，可以叫你和你的全家得救。&rsquo;<sup>15</sup>我一开讲，圣灵便降在他们身上，正像当初降在我们身上一样。<sup>16</sup>我就想起主的话说：&lsquo;约翰是用水施洗，但你们要受圣灵的洗。&rsquo;<sup>17</sup>神既然给他们恩赐，像在我们信主耶稣基督的时候给了我们一样，我是谁，能拦阻　神呢？&rdquo;</p>

<p><sup>18</sup>众人听见这话，就不言语了，只归荣耀与　神，说：&ldquo;这样看来，神也赐恩给外邦人，叫他们悔改得生命了。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/321.mp4" type="button" class="external-movie">
         观看&nbsp;徒11:1-18&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">故事中克服了什么障碍或难题？又是如何克服的呢？</li>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	
	<li class="nobreak-final-final">在外邦人中间工作的消息很快地传回耶路撒冷。彼得从宣教的行程中返回后（<span class="popup-link" @click = "popUp('pop2')"> 徒11:2</span>），
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>及至<u class="person underline">彼得</u>上了耶路撒冷，那些奉割礼的门徒和他争辩，说：</p>
	<!-- end bible --></div>
	遭到犹太信徒质问，说他打破犹太人的律法，进到外邦人家中，又与他们同吃，甚至同住了。有些信徒仍不了解福音使命的真正意涵，他们不相信主悦纳非犹太人的族群。耶稣使用此事件，要开始拆除犹太人对自己文化的过分坚持，因为这让他们无法实践世界性的宣教使命，去使万民作门徒。彼得领受的异象及主的教导，还有圣灵同在的确据，一起证明了上帝真的全然接纳外邦人。听完彼得的讲解，犹太信徒终于为主也赐恩给外邦人的事，赞美上帝。他们从反对、担心，转为敬拜上帝。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒11:16-17</p>

<p class="forward bible"><sup>16</sup>我就想起主的话说：&lsquo;约翰是用水施洗，但你们要受圣灵的洗。&rsquo;<sup>17</sup>神既然给他们恩赐，像在我们信主耶稣基督的时候给了我们一样，我是谁，能拦阻 神呢？&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你有过和与自己背景不同的人一起吃饭的经历吗？感觉如何？外邦人也领受了神的道到底是件好事还是坏事？为什么？从彼得的经历中我们能学到哪些功课呢？</li>
	<li class="forward">当上帝借着福音已经将社会的、国家的、和宗教的藩篱除掉时，你和别人之间是否还保留着任何必须除掉的某一种藩篱呢？为什么？</li>
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
	<li class="forward">在教会宣教的事工上，我们教会有什么可以摆上的？你可以如何参与教会的实际服事中并帮助其他的弟兄姊妹呢？</li>
	<li class="forward">列下最近哪些事情或是经历让你却步，愧疚或是怀疑神的爱？你想今天耶稣来到你所处的境况，祂会对你说什么？而你想耶稣为你做什么？</li>
	<li class="forward">鼓励自己和门徒，每天学习数算一件神在你身上的恩典和作为，并向神感恩。相信神使万事互相效力，叫爱祂的人得益处，并效法祂爱子耶稣基督的样式。现在所经历的一切，试想有什么是神要你们学习和成长的？</li>
	<li class="forward">阅读附录：《宣教士：阿德希》，把阅读心得和反思写下，下周分享。</li>
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
	<li class="forward">为更多的教会看到发展领袖的重要性，花时间付代价去造就门徒和建立领袖，他们合乎主用，一起兴旺福音、建立教会。弟兄姐妹也主动和乐意接受装备，生活中渴慕神国的治理和掌管，活出在地如在天的生命，荣神益人。</li>
	<li class="forward">为这城市的众教会和牧者同工有颗寻求合一配搭的心祷告。若当中有任何嫌隙、骄傲或一些神学论点的不同，在基督里里彼此饶恕和合一，各人看别人比自己强，同心配搭服事，并看到神赐恩给众人，就归荣耀给神，一起为这城市祷告守望，寻求神在这地的心意并为众人最大的益处着想。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->