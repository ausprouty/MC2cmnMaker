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
                        <div class="chapter_number ltr"><h1>43.</h1></div>
                        <div class="chapter_title ltr"><h1>领袖的倍增</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约9:4-5</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>趁着白日，我们必须做那差我来者的工；黑夜将到，就没有人能做工了。<sup class="versenum">5&nbsp;</sup>我在世上的时候，是世上的光。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>天父允许苦难的发生，好让祂的荣耀能彰显出来。祂也藉着回应人在患难中的呼求，得着荣耀。很多时候，我们不知道为什么神容许苦难临到，世人所能看所能明白的都有限，但神的智慧是无限的，祂是创造生命的主宰，祂对人的生命有美好的计划。因此我们应当小心，别论断他人的苦难。因为人受苦难，可能不是因为他做了不好的事，而是上帝要在他身上显出祂自己的荣耀来。人若有疑惑，当回到赐生命的主面前，在祂里面必能找到生命的价值与意义。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p>耶稣周游加利利各城乡，以神迹和教导应验了祂就是先知以赛亚所预言那位彰显神救恩的使者，然而加利利只是起点，耶稣清楚自己的使命，当神所预定的时刻来到时，祂毫不犹疑地朝向耶路撒冷走去。</p>

<ul class="up">
	<li class="nobreak-final-final">旅程之初所发生的一些事件环绕着门徒的失败和成功，起始是耶稣在撒玛利亚谴责发怒的门徒，这件事显示出门徒并不明白耶稣使命的性质（<span class="popup-link" @click = "popUp('pop2')"> 路9:51-56</span>）；

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">51&nbsp;</sup>耶稣被接上升的日子将到，他就定意向耶路撒冷去，<sup class="versenum">52&nbsp;</sup>便打发使者在他前头走。他们到了撒马利亚的一个村庄，要为他预备。<sup class="versenum">53&nbsp;</sup>那里的人不接待他，因他面向耶路撒冷去。<sup class="versenum">54&nbsp;</sup>他的门徒<u class="person underline">雅各</u>、<u class="person underline">约翰</u>看见了，就说：&ldquo;主啊，你要我们吩咐火从天上降下来烧灭他们，像<u class="person underline">以利亚</u>所做的吗？&rdquo;<sup class="versenum">55&nbsp;</sup>耶稣转身责备两个门徒，说：&ldquo;你们的心如何，你们并不知道。<sup class="versenum">56&nbsp;</sup>人子来不是要灭人的性命，是要救人的性命。&rdquo;说着就往别的村庄去了。</p>
	<!-- end bible --></div>
	继而是耶稣再三责备门徒误解跟随主的优先次序（<span class="popup-link" @click = "popUp('pop3')"> 路9:57-62</span>）；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">57&nbsp;</sup>他们走路的时候，有一人对耶稣说：&ldquo;你无论往哪里去，我要跟从你。&rdquo;<sup class="versenum">58&nbsp;</sup>耶稣说：&ldquo;狐狸有洞，天空的飞鸟有窝，只是人子没有枕头的地方。&rdquo;<sup class="versenum">59&nbsp;</sup>又对一个人说：&ldquo;跟从我来！&rdquo;那人说：&ldquo;主，容我先回去埋葬我的父亲。&rdquo;<sup class="versenum">60&nbsp;</sup>耶稣说：&ldquo;任凭死人埋葬他们的死人，你只管去传扬神国的道。&rdquo;<sup class="versenum">61&nbsp;</sup>又有一人说：&ldquo;主，我要跟从你，但容我先去辞别我家里的人。&rdquo;<sup class="versenum">62&nbsp;</sup>耶稣说：&ldquo;手扶着犁向后看的，不配进神的国。&rdquo;</p>
	<!-- end bible --></div>
	虽然门徒屡屡失败，耶稣仍然赐给他们胜过邪灵的权柄，差遣了七十二个人在祂前面，往各城宣扬神国的福音。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音10:1-42》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音10:1-42</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>这事以后，主又设立七十个人，差遣他们两个两个地在他前面，往自己所要到的各城、各地方去，<sup>2</sup>就对他们说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主打发工人出去收他的庄稼。<sup>3</sup>你们去吧！我差你们出去，如同羊羔进入狼群。<sup>4</sup>不要带钱囊，不要带口袋，不要带鞋，在路上也不要问人的安。<sup>5</sup>无论进哪一家，先要说：&lsquo;愿这一家平安！&rsquo;<sup>6</sup>那里若有当得平安的人（注：&ldquo;当得平安的人&rdquo;原文作&ldquo;平安之子&rdquo;），你们所求的平安就必临到那家；不然，就归与你们了。<sup>7</sup>你们要住在那家，吃喝他们所供给的，因为工人得工价是应当的。不要从这家搬到那家。<sup>8</sup>无论进哪一城，人若接待你们，给你们摆上什么，你们就吃什么<sup>9</sup>要医治那城里的病人，对他们说：&lsquo;　神的国临近你们了。&rsquo;<sup>10</sup>无论进哪一城，人若不接待你们，你们就到街上去，<sup>11</sup>说：&lsquo;就是你们城里的尘土粘在我们的脚上，我们也当着你们擦去。虽然如此，你们该知道　神的国临近了。&rsquo;<sup>12</sup>我告诉你们，当审判的日子，所多玛所受的，比那城还容易受呢！</p>

<p><sup>13</sup>哥拉汛哪，你有祸了！伯赛大啊，你有祸了！因为在你们中间所行的异能若行在推罗、西顿，他们早已披麻蒙灰，坐在地上悔改了。<sup>14</sup>当审判的日子，推罗、西顿所受的，比你们还容易受呢！<sup>15</sup>迦百农啊！你已经升到天上（注：或作&ldquo;你将要升到天上吗？&rdquo;），将来必推下阴间。&rdquo;<sup>16</sup>又对门徒说：&ldquo;听从你们的就是听从我；弃绝你们的就是弃绝我；弃绝我的就是弃绝那差我来的。&rdquo;</p>

<p><sup>17</sup>那七十个人欢欢喜喜地回来，说：&ldquo;主啊！因你的名，就是鬼也服了我们。&rdquo;<sup>18</sup>耶稣对他们说：&ldquo;我曾看见撒但从天上坠落，像闪电一样。<sup>19</sup>我已经给你们权柄可以践踏蛇和蝎子，又胜过仇敌一切的能力，断没有什么能害你们。<sup>20</sup>然而，不要因鬼服了你们就欢喜，要因你们的名记录在天上欢喜。&rdquo;</p>

<p><sup>21</sup>正当那时，耶稣被圣灵感动就欢乐，说：&ldquo;父啊，天地的主，我感谢你！因为你将这些事向聪明通达人就藏起来，向婴孩就显出来。父啊！是的，因为你的美意本是如此。<sup>22</sup>一切所有的都是我父交付我的。除了父，没有人知道子是谁；除了子和子所愿意指示的，没有人知道父是谁。&rdquo;</p>

<p><sup>23</sup>耶稣转身暗暗地对门徒说：&ldquo;看见你们所看见的，那眼睛就有福了。<sup>24</sup>我告诉你们：从前有许多先知和君王要看你们所看的，却没有看见；要听你们所听的，却没有听见。&rdquo;</p>

<p><sup>25</sup>有一个律法师起来试探耶稣，说：&ldquo;夫子，我该做什么才可以承受永生？&rdquo;<sup>26</sup>耶稣对他说：&ldquo;律法上写的是什么？你念的是怎样呢？&rdquo;<sup>27</sup>他回答说：&ldquo;你要尽心、尽性、尽力、尽意爱主你的　神；又要爱邻舍如同自己。&rdquo;<sup>28</sup>耶稣说：&ldquo;你回答的是。你这样行，就必得永生。&rdquo;<sup>29</sup>那人要显明自己有理，就对耶稣说：&ldquo;谁是我的邻舍呢？&rdquo;</p>

<p><sup>30</sup>耶稣回答说：&ldquo;有一个人从耶路撒冷下耶利哥去，落在强盗手中。他们剥去他的衣裳，把他打个半死，就丢下他走了。<sup>31</sup>偶然有一个祭司从这条路下来，看见他就从那边过去了。<sup>32</sup>又有一个利未人来到这地方，看见他，也照样从那边过去了。<sup>33</sup>惟有一个撒马利亚人行路来到那里，看见他就动了慈心，<sup>34</sup>上前用油和酒倒在他的伤处，包裹好了，扶他骑上自己的牲口，带到店里去照应他。<sup>35</sup>第二天拿出二钱银子来，交给店主，说：&lsquo;你且照应他，此外所费用的，我回来必还你。&rsquo;<sup>36</sup>你想，这三个人哪一个是落在强盗手中的邻舍呢？&rdquo;<sup>37</sup>他说：&ldquo;是怜悯他的。&rdquo;耶稣说：&ldquo;你去照样行吧。&rdquo;</p>

<p><sup>38</sup>他们走路的时候，耶稣进了一个村庄。有一个女人，名叫马大，接他到自己家里。<sup>39</sup>她有一个妹子，名叫马利亚，在耶稣脚前坐着听他的道。<sup>40</sup>马大伺候的事多，心里忙乱，就进前来说：&ldquo;主啊，我的妹子留下我一个人伺候，你不在意吗？请吩咐她来帮助我。&rdquo;<sup>41</sup>耶稣回答说：&ldquo;马大！马大！你为许多的事思虑烦扰，<sup>42</sup>但是不可少的只有一件；马利亚已经选择那上好的福分，是不能夺去的。&rdquo;</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/243.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音10:1-42&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣怎样向门徒示范生活和事奉，作属神的领袖？</li>
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

<p class="up">修殿节之后，耶稣往约旦河的另一边，就是三年前施洗约翰为祂施洗的地方去。耶稣接下来的几个月都住在那里。祂兴起其他七十个人，设立他们为领袖，就像从前在十二使徒身上做的一样。祂给门徒指示，差遣他们两两出去，到约旦河外的比利亚。这次重组的三十五个新团队，再加上耶稣和十二使徒共组的团队， 一共三十六个。像从前十二使徒一样，他们出去的时候，也没有带任何东西，需要仰赖天父供应一切的需要。他们分散开来，进到各城，寻找当得平安的家，分享天国福音、服事人。当他们返回时，非常高兴上帝使用他们。但是耶稣提醒他们应当为名字记录在生命册上而欢喜。耶稣看见上帝在这些人身上的作为，而心里欢乐，赞美上帝。天父的旨意是让耶稣死在十架上。而祂给耶稣的工作是去使人作门徒，并继续倍增下去。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路10:19-20</p>

<p class="forward bible"><sup>19</sup>我已经给你们权柄可以践踏蛇和蝎子，又胜过仇敌一切的能力，断没有什么能害你们。<sup>20</sup>然而，不要因鬼服了你们就欢喜，要因你们的名记录在天上欢喜。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">基督徒宣教的使命是不会改变，然而宣教的方法和策略在不同的时代和环境中却需要灵活的应用。在这段耶稣对门徒的差传教导中，有什么是我们可以把握的原则？当耶稣对门徒说&ldquo;要收的庄稼多，作工的人却少&rdquo;，这句话在你心中的回响是什么？</li>
	<li class="forward">耶稣说最令人欢欣鼓舞的是我们的名字被记录在天上，这件事比拥有赶鬼的恩赐更重要（参<span class="popup-link" @click = "popUp('pop4')"> 太7:21-23</span>）。
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>凡称呼我&lsquo;主啊，主啊&rsquo;的人不能都进天国，唯独遵行我天父旨意的人才能进去。<sup class="versenum">22&nbsp;</sup>当那日，必有许多人对我说：&lsquo;主啊，主啊，我们不是奉你的名传道，奉你的名赶鬼，奉你的名行许多异能吗？&rsquo;<sup class="versenum">23&nbsp;</sup>我就明明地告诉他们说：&lsquo;我从来不认识你们。你们这些作恶的人，离开我去吧！&rsquo;</p>
	<!-- end bible --></div>
	许多人在追求灵恩时，可能会忽略什么？在路10:20耶稣的教导，是否可应用在现今的一些教会？耶稣教导我们该看重的是什么？为什么？</li>
	<li class="forward">你会限制自己的邻舍吗？耶稣说邻舍是没有界限的，任何有需要帮助的人都是一个遵行神话语的人应该去爱的对象。你四周有需要关心的人吗？谁会是&ldquo;他的&rdquo;邻舍？耶稣说：&ldquo;看看撒玛利亚人所做的，你照样去行吧！&rdquo;</li>
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
	<li class="forward">耶稣对门徒基本的要求就是爱神和爱人，一生持续操练如何尽心、尽性、尽力、尽意爱神，并且爱人如己。这周向你的&ldquo;邻舍&rdquo;表达爱心，并主动问奇妙问题。</li>
	<li class="forward">评估和反思这段时间你与主亲近的经历，是否有急待完成的工作或活动使你无法安静在耶稣脚前？你有需要调整自己的生活或优先次序吗？</li>
	<li class="forward">与初信者或门徒评估他们每天的灵修生活，是否真实体验和享受与神亲近、在神的话语上扎根，或对神有正确的认识？</li>
	<li class="forward">为教会的牧者与小组组长在预备每周讲道和分享信息时，有从神而来的智慧和权柄，按着正意分解真理的道，以生命榜样，忠心牧养和照管主的群羊，让众人真实遇见神，生命被更新。</li>
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

<p>亲爱的天父，每一天都是新的，因为祢的慈爱和信实永远长存。祢的话语大有能力和带有权柄，祢把人从黑暗的权势下拯救出来，叫人因真理而得自由，享受神所赐的安息和平安。我们为教会的牧者和同工祷告，求主保守他们的心思意念常在祢里面，天天被圣灵充满，家庭和服事上有见证有美名。愿他们带着祢的权柄，使我们众人在祢的话语中遇见祢，得着喂养和造就。也愿祢将得救的人数天天加给教会，我们立志忠心照管和牧养祢所托付的群羊，倍增他们成为祢的门徒和属灵领袖。奉主耶稣的名求，阿们！</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->