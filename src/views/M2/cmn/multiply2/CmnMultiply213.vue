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
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>庄稼已经熟了</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约3:34-35</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">34&nbsp;</sup>神所差来的就说神的话，因为神赐圣灵给他是没有限量的。<sup class="versenum">35&nbsp;</sup>父爱子，已将万有交在他手里。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣走遍各城各乡时，祂看到人们的需要，就怜悯他们。祂对门徒说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主打发工人出去收他的庄稼。&rdquo;神的心意是愿所有人都认识祂和爱祂。祂不仅想使用我们，祂也想从我们将要收割的庄稼中，兴起更多的工人。让我们继续求神差遣更多的工人去带领人来认识祂。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">耶稣与日俱增的影响力不但引起了施洗约翰的门徒心生不满，在一旁的法利赛人更是虎视眈眈，耶稣因此离开了犹太地，在返回耶路撒冷的路途中，耶稣这一行人必须经过撒玛利亚，他们来到一座叫做叙加的城，就在附近稍作停留。因为从犹太往北到加利利，最便捷的路线是经过撒玛利亚，否则要往东绕道约旦河外的路线，由于历史和宗教的因素，撒玛利亚人为犹太人所鄙视，故有些犹太人宁可绕道而行，但耶稣走的是快捷方式。另外，犹太人传统的敬拜中心是在耶路撒冷，但撒玛利亚人不接受这个传统，他们以摩西五经为依据，选择在基利心山上建立圣殿、作为敬拜之地。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音4:1-42》两遍。。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音4:1-42</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>主知道法利赛人听见他收门徒施洗比约翰还多<sup>2</sup>（其实不是耶稣亲自施洗，乃是他的门徒施洗。）<sup>3</sup> 他就离了犹太，又往加利利去。<sup>4</sup>必须经过撒马利亚，<sup>5</sup>于是到了撒马利亚的一座城，名叫叙加，靠近雅各给他儿子约瑟的那块地。<sup>6</sup>在那里有雅各井。耶稣因走路困乏，就坐在井旁。那时约有午正。</p>

<p><sup>7</sup>有一个撒马利亚的妇人来打水，耶稣对她说：&ldquo;请你给我水喝。&rdquo;<sup>8</sup>那时门徒进城买食物去了。<sup>9</sup>撒马利亚的妇人对他说：&ldquo;你既是犹太人，怎么向我一个撒马利亚妇人要水喝呢？&rdquo;原来犹太人和撒马利亚人没有来往。<sup>10</sup>耶稣回答说：&ldquo;你若知道　神的恩赐和对你说&lsquo;给我水喝&rsquo;的是谁，你必早求他，他也必早给了你活水。&rdquo;<sup>11</sup>妇人说：&ldquo;先生，没有打水的器具，井又深，你从哪里得活水呢？<sup>12</sup>我们的祖宗雅各将这井留给我们，他自己和儿子并牲畜也都喝这井里的水，难道你比他还大吗？&rdquo;<sup>13</sup>耶稣回答说：&ldquo;凡喝这水的，还要再渴；<sup>14</sup>人若喝我所赐的水，就永远不渴。我所赐的水要在他里头成为泉源，直涌到永生。&rdquo;<sup>15</sup>妇人说：&ldquo;先生，请把这水赐给我，叫我不渴，也不用来这么远打水。&rdquo;<sup>16</sup>耶稣说：&ldquo;你去叫你丈夫也到这里来。<sup>17</sup>妇人说：&ldquo;我没有丈夫。&rdquo;耶稣说：&ldquo;你说没有丈夫，是不错的。<sup>18</sup>你已经有五个丈夫，你现在有的，并不是你的丈夫，你这话是真的。&rdquo;<sup>19</sup>妇人说：&ldquo;先生，我看出你是先知。<sup>20</sup>我们的祖宗在这山上礼拜，你们倒说，应当礼拜的地方是在耶路撒冷。&rdquo;<sup>21</sup>耶稣说：&ldquo;妇人，你当信我。时候将到，你们拜父也不在这山上，也不在耶路撒冷。<sup>22</sup>你们所拜的，你们不知道；我们所拜的，我们知道，因为救恩是从犹太人出来的。<sup>23</sup>时候将到，如今就是了。那真正拜父的，要用心灵和诚实拜他，因为父要这样的人拜他。<sup>24</sup>神是个灵（注：或无&ldquo;个&rdquo;字），所以拜他的，必须用心灵和诚实拜他。&rdquo;<sup>25</sup>妇人说：&ldquo;我知道弥赛亚（就是那称为基督的）要来，他来了，必将一切的事都告诉我们。&rdquo;<sup>26</sup>耶稣说：&ldquo;这和你说话的就是他。&rdquo;</p>

<p><sup>27</sup>当下门徒回来，就希奇耶稣和一个妇人说话。只是没有人说：&ldquo;你是要什么？&rdquo;或说：&ldquo;你为什么和她说话？&rdquo;<sup>28</sup>那妇人就留下水罐子，往城里去，对众人说：<sup>29</sup>&ldquo;你们来看！有一个人将我素来所行的一切事都给我说出来了，莫非这就是基督吗？&rdquo;<sup>30</sup>众人就出城往耶稣那里去。<sup>31</sup>这其间，门徒对耶稣说：&ldquo;拉比，请吃。&rdquo;<sup>32</sup>耶稣说：&ldquo;我有食物吃，是你们不知道的。&rdquo;<sup>33</sup>门徒就彼此对问说：&ldquo;莫非有人拿什么给他吃吗？&rdquo;<sup>34</sup>耶稣说：&ldquo;我的食物就是遵行差我来者的旨意，做成他的工。<sup>35</sup>你们岂不说&lsquo;到收割的时候还有四个月&rsquo;吗？我告诉你们：举目向田观看，庄稼已经熟了（注：原文作&ldquo;发白&rdquo;），可以收割了。<sup>36</sup>收割的人得工价，积蓄五谷到永生，叫撒种的和收割的一同快乐。<sup>37</sup>俗语说&lsquo;那人撒种，这人收割&rsquo;，这话可见是真的。<sup>38</sup>我差你们去收你们所没有劳苦的，别人劳苦，你们享受他们所劳苦的。&rdquo;<sup>39</sup>那城里有好些撒马利亚人信了耶稣，因为那妇人作见证说：&ldquo;他将我素来所行的一切事都给我说出来了。&rdquo;<sup>40</sup>于是撒马利亚人来见耶稣，求他在他们那里住下，他便在那里住了两天。<sup>41</sup>因耶稣的话，信的人就更多了。<sup>42</sup>便对妇人说：&ldquo;现在我们信，不是因为你的话，是我们亲自听见了，知道这真是救世主。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/213.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音4:1-42&nbsp;</button>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣开始要门徒为祂作见证，并且替人施洗，让他们投入倍增的运动中。耶稣知道自己的门徒变多，引起耶路撒冷宗教领袖的注意。于是带门徒离开那地，经过非犹太人地区的撒马利亚。犹太人向来恨撒马利亚人，对他们有极大的偏见。耶稣打破两条传统规范：祂和一个撒马利亚人说话，而且是个妇人！因此，撒马利亚妇人和门徒对耶稣做的事都感到希奇。耶稣这样做，是要重塑门徒的心态，因为他们看不见上帝在他们周围预备的人和成熟的庄稼。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约4:34</p>

<p class="forward bible">耶稣说：&ldquo;我的食物就是遵行差我来者的旨意，做成他的工。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣打破种族、宗教、性别的界线，进入异文化&ldquo;宣教&rdquo;，这件事对我们最大的提醒是什么？如何应用在我们个人和教会中？</li>
	<li class="forward">当今天教会在为不同的敬拜方式或神学而争论的时候，耶稣的教导是什么？什么是祂看重的？为什么？</li>
	<li class="forward">这个微不足道的妇人信了耶稣以后立刻作见证，而她简单的见证竟然引领了许多人归向耶稣，这个妇人有什么值得我们学习的地方？</li>
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
	<li class="forward">在《信徒动员表》中列下2位没有稳定聚会的弟兄姊妹，与他们分享《被圣灵充满》小册子，并主动关心和邀请他们固定参与教会生活或小组。</li>
	<li class="forward">开始为普世，不同民族及宣教事工代祷和奉献。也求神预备你的心，看到广大禾场的需要，主动参与短宣队。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
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

<p>宇宙万有的神，我们愿祢赐下复兴的异象，使地上的教会具备新妇的美德，且以圣洁为装饰。愿我们每一位肢体在社区里为祢作有吸引力、影响力的美好见证。求主保守我们在祢里面的合一，齐心兴旺福音。求主拓展我们的疆界，开我们的心眼，看到各地福音的需要，以实际的行动积极参与。我们愿以祢的心为心，将福音广传，倍增门徒，荣耀主名。奉主耶稣的圣名祷告，阿们。</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->