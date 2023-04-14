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
                        <div class="chapter_number ltr"><h1>46.</h1></div>
                        <div class="chapter_title ltr"><h1>热情型领导力</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路19:9-10</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>耶稣说：&ldquo;今天救恩到了这家，因为他也是<u class="person underline">亚伯拉罕</u>的子孙。<sup class="versenum">10&nbsp;</sup>人子来，为要寻找、拯救失丧的人。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>作主耶稣的门徒，我们知道没有什么东西是属于自己的，因为唯有神才拥有一切。神呼召我们管理祂所托付的一切，包括我们的时间、我们口中的话、我们的思想、我们的恩赐。所以我们要妥善管理神所托付的一切，因为将来我们都要为自己所作的，向神一一交帐。今天 神选召我们，让我们经历基督的救赎和大能，同时祂也要借着我们在这弯曲悖谬的世代里，成为祂无瑕疵的儿女，作神百般恩赐的好管家，领人归向祂。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">祂主动邀请被人唾弃的税吏撒该进入神的家中，在即将结束在世上生活的这个时刻，祂再度宣告祂在世界上的使命：&ldquo;人子来是要拯救和寻找失丧的人&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 路加福音19:1-10</span>）；
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣进了耶利哥，正经过的时候，<sup class="versenum">2&nbsp;</sup>有一个人名叫<u class="person underline">撒该</u>，做税吏长，是个财主，<sup class="versenum">3&nbsp;</sup>他要看看耶稣是怎样的人。只因人多，他的身量又矮，所以不得看见。<sup class="versenum">4&nbsp;</sup>就跑到前头，爬上桑树，要看耶稣，因为耶稣必从那里经过。<sup class="versenum">5&nbsp;</sup>耶稣到了那里，抬头一看，对他说：&ldquo;<u class="person underline">撒该</u>，快下来！今天我必住在你家里。&rdquo;<sup class="versenum">6&nbsp;</sup>他就急忙下来，欢欢喜喜地接待耶稣。<sup class="versenum">7&nbsp;</sup>众人看见，都私下议论说：&ldquo;他竟到罪人家里去住宿！&rdquo;<sup class="versenum">8&nbsp;</sup><u class="person underline">撒该</u>站着对主说：&ldquo;主啊，我把所有的一半给穷人，我若讹诈了谁，就还他四倍。&rdquo;<sup class="versenum">9&nbsp;</sup>耶稣说：&ldquo;今天救恩到了这家，因为他也是<u class="person underline">亚伯拉罕</u>的子孙。<sup class="versenum">10&nbsp;</sup>人子来，为要寻找、拯救失丧的人。&rdquo;</p>
	<!-- end bible --></div>
	当懵懂的门徒以为即将在耶路撒冷完成得国的大业时，耶稣以一个十锭银子的比喻破碎了他们的梦想，祂暗示门徒祂即将离去，在祂回来之前，门徒要做忠心的仆人，善用个人的恩赐，完成祂所托付的工作（<span class="popup-link" @click = "popUp('pop3')"> 路加福音19:11-27</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>众人正在听见这些话的时候，耶稣因为将近耶路撒冷，又因他们以为神的国快要显出来，就另设一个比喻，说：<sup class="versenum">12&nbsp;</sup>&ldquo;有一个贵胄往远方去，要得国回来。<sup class="versenum">13&nbsp;</sup>便叫了他的十个仆人来，交给他们十锭银子，说：&lsquo;你们去做生意，直等我回来。&rsquo;<sup class="versenum">14&nbsp;</sup>他本国的人却恨他，打发使者随后去说：&lsquo;我们不愿意这个人做我们的王。&rsquo;<sup class="versenum">15&nbsp;</sup>他既得国回来，就吩咐叫那领银子的仆人来，要知道他们做生意赚了多少。<sup class="versenum">16&nbsp;</sup>头一个上来，说：&lsquo;主啊，你的一锭银子已经赚了十锭。&rsquo;<sup class="versenum">17&nbsp;</sup>主人说：&lsquo;好，良善的仆人！你既在最小的事上有忠心，可以有权柄管十座城。&rsquo;<sup class="versenum">18&nbsp;</sup>第二个来，说：&lsquo;主啊，你的一锭银子已经赚了五锭。&rsquo;<sup class="versenum">19&nbsp;</sup>主人说：&lsquo;你也可以管五座城。&rsquo;<sup class="versenum">20&nbsp;</sup>又有一个来，说：&lsquo;主啊，看哪，你的一锭银子在这里，我把它包在手巾里存着。<sup class="versenum">21&nbsp;</sup>我原是怕你，因为你是严厉的人，没有放下的还要去拿，没有种下的还要去收。&rsquo;<sup class="versenum">22&nbsp;</sup>主人对他说：&lsquo;你这恶仆！我要凭你的口定你的罪。你既知道我是严厉的人，没有放下的还要去拿，没有种下的还要去收，<sup class="versenum">23&nbsp;</sup>为什么不把我的银子交给银行，等我来的时候，连本带利都可以要回来呢？&rsquo;<sup class="versenum">24&nbsp;</sup>就对旁边站着的人说：&lsquo;夺过他这一锭来，给那有十锭的！&rsquo;<sup class="versenum">25&nbsp;</sup>他们说：&lsquo;主啊，他已经有十锭了。&rsquo;<sup class="versenum">26&nbsp;</sup>主人说：&lsquo;我告诉你们：凡有的，还要加给他；没有的，连他所有的也要夺过来。<sup class="versenum">27&nbsp;</sup>至于我那些仇敌，不要我做他们王的，把他们拉来，在我面前杀了吧！&rsquo;&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="indent2">以色列所期盼的弥赛亚没有率领威武的大军进入圣城耶路撒冷，耶稣骑着一匹驴驹以谦和的姿态进入这个祂即将受死并得荣耀的地方，这是何等历史性的一刻！</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音19:28-48》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音19:28-48</button><div class="collapsed" id ="Text0">

<p><sup>28</sup>耶稣说完了这话，就在前面走，上耶路撒冷去。<sup>29</sup>将近伯法其和伯大尼，在一座山名叫橄榄山那里，就打发两个门徒，说：<sup>30</sup> &ldquo;你们往对面村子里去，进去的时候，必看见一匹驴驹拴在那里，是从来没有人骑过的，可以解开牵来。<sup>31</sup>若有人问为什么解它，你们就说：&lsquo;主要用它。&rsquo;&rdquo;</p>

<p><sup>32</sup>打发的人去了，所遇见的正如耶稣所说的。<sup>33</sup>他们解驴驹的时候，主人问他们说：&ldquo;解驴驹做什么？&rdquo;<sup>34</sup>他们说：&ldquo;主要用它。&rdquo;<sup>35</sup>他们牵到耶稣那里，把自己的衣服搭在上面，扶着耶稣骑上。<sup>36</sup>走的时候，众人把衣服铺在路上。<sup>37</sup>将近耶路撒冷，正下橄榄山的时候，众门徒因所见过的一切异能，都欢乐起来，大声赞美　神，<sup>38</sup>说：&ldquo;奉主名来的王是应当称颂的！在天上有和平；在至高之处有荣光。&rdquo;</p>

<p><sup>39</sup>众人中有几个法利赛人对耶稣说：&ldquo;夫子，责备你的门徒吧！&rdquo;<sup>40</sup>耶稣说：&ldquo;我告诉你们，若是他们闭口不说，这些石头必要呼叫起来。&rdquo;<sup>41</sup>耶稣快到耶路撒冷，看见城，就为它哀哭，<sup>42</sup>说：&ldquo;巴不得你在这日子知道关系你平安的事；无奈这事现在是隐藏的，叫你的眼看不出来。<sup>43</sup>因为日子将到，你的仇敌必筑起土垒，周围环绕你，四面困住你，<sup>44</sup>并要扫灭你和你里头的儿女，连一块石头也不留在石头上，因你不知道眷顾你的时候。&rdquo;</p>

<p><sup>45</sup>耶稣进了殿，赶出里头做买卖的人，<sup>46</sup>对他们说：&ldquo;经上说：&lsquo;我的殿必作祷告的殿&rsquo;，你们倒使它成为贼窝了。&rdquo;<sup>47</sup>耶稣天天在殿里教训人。祭司长和文士与百姓的尊长都想要杀他，<sup>48</sup>但寻不出法子来，因为百姓都侧耳听他。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/246.mp4" type="button" class="external-movie">
         观看路加福音19:28-48</button>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">五百年前的预言如今在这群年轻领袖的眼前应验。君王骑着驴来了！（<span class="popup-link" @click = "popUp('pop8')"> 撒9:9</span>）。

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>&ldquo;锡安的民哪，应当大大喜乐！耶路撒冷的民哪，应当欢呼！看哪，你的王来到你这里，他是公义的，并且施行拯救，谦谦和和地骑着驴，就是骑着驴的驹子。</p>
	<!-- end bible --></div>
	当耶稣下橄榄山，进耶路撒冷的时候，群众都赞美上帝。法利赛人知道这个场面暗指耶稣是要来的弥赛亚，便要耶稣阻止门徒。但耶稣明白这个见证在天父的计划中相当重要。耶稣靠近圣城的时候，哭了起来。祂很难过，因为许多人不晓得&rdquo;祂是谁&rdquo;，还有这事件(预言应验)的意义。祂也知道有一天因为人的不信，审判将要临到耶路撒冷；圣城耶路撒冷会被罗马军队摧毁。 再一次我们看见耶稣表露心中的热情。祂赶出兑换银钱的人，因为他们回来重犯，向在圣殿敬拜的人赚取不当利益。祂不只为上帝的圣名大发热心，也怜悯穷人和寄居的。</li>
</ul>

<div>
<ul>
	<li class="nobreak-final-final"><span><span><span lang="ZH-CN">（进深学习：<span class="popup-link" @click = "popUp('pop5')"> 马太福音21:1-17</span>； </span></span></span>

	<div class="popup invisible" id="pop5"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<h3><span><span><span lang="ZH-CN">主骑驴进耶路撒冷</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">1 </sup>耶稣和门徒将近耶路撒冷，到了伯法其，在橄榄山那里，<sup class="versenum">2&nbsp;</sup>耶稣就打发两个门徒，对他们说：&ldquo;你们往对面村子里去，必看见一匹驴拴在那里，还有驴驹同在一处。你们解开，牵到我这里来。<sup class="versenum">3&nbsp;</sup>若有人对你们说什么，你们就说：&lsquo;主要用它。&rsquo;那人必立时让你们牵来。&rdquo;<sup class="versenum">4&nbsp;</sup>这事成就，是要应验先知的话说：<sup class="versenum">5&nbsp;</sup>&ldquo;要对锡安的居民说：&lsquo;看哪，你的王来到你这里，是温柔的，又骑着驴，就是骑着驴驹子。&rsquo;&rdquo;<sup class="versenum">6&nbsp;</sup>门徒就照耶稣所吩咐的去行，<sup class="versenum">7&nbsp;</sup>牵了驴和驴驹来，把自己的衣服搭在上面，耶稣就骑上。<sup class="versenum">8&nbsp;</sup>众人多半把衣服铺在路上，还有人砍下树枝来铺在路上。<sup class="versenum">9&nbsp;</sup>前行后随的众人喊着说：&ldquo;和散那归于<u class="person underline">大卫</u>的子孙！奉主名来的是应当称颂的！高高在上和散那！&rdquo;<sup class="versenum">10&nbsp;</sup>耶稣既进了耶路撒冷，合城都惊动了，说：&ldquo;这是谁？&rdquo;<sup class="versenum">11&nbsp;</sup>众人说：&ldquo;这是加利利拿撒勒的先知耶稣。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">12&nbsp;</sup>耶稣进了神的殿，赶出殿里一切做买卖的人，推倒兑换银钱之人的桌子和卖鸽子之人的凳子，<sup class="versenum">13&nbsp;</sup>对他们说：&ldquo;经上记着说：&lsquo;我的殿必称为祷告的殿&rsquo;，你们倒使它成为贼窝了！&rdquo;<sup class="versenum">14&nbsp;</sup>在殿里有瞎子、瘸子到耶稣跟前，他就治好了他们。<sup class="versenum">15&nbsp;</sup>祭司长和文士看见耶稣所行的奇事，又见小孩子在殿里喊着说&ldquo;和散那归于<u class="person underline">大卫</u>的子孙&rdquo;，就甚恼怒，<sup class="versenum">16&nbsp;</sup>对他说：&ldquo;这些人所说的，你听见了吗？&rdquo;耶稣说：&ldquo;是的。经上说&lsquo;你从婴孩和吃奶的口中完全了赞美&rsquo;的话，你们没有念过吗？&rdquo;<sup class="versenum">17&nbsp;</sup>于是离开他们，出城到伯大尼去，在那里住宿。</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop6')"> 马可福音11:1-26</span>； </span></span></span>

	<div class="popup invisible" id="pop6"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<h3><span><span><span lang="ZH-CN">主骑驴进耶路撒冷</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">1 </sup>耶稣和门徒将近耶路撒冷，到了伯法其和伯大尼，在橄榄山那里，耶稣就打发两个门徒，<sup class="versenum">2&nbsp;</sup>对他们说：&ldquo;你们往对面村子里去，一进去的时候，必看见一匹驴驹拴在那里，是从来没有人骑过的，可以解开牵来。<sup class="versenum">3&nbsp;</sup>若有人对你们说：&lsquo;为什么做这事？&rsquo;你们就说：&lsquo;主要用它。&rsquo;那人必立时让你们牵来。&rdquo;<sup class="versenum">4&nbsp;</sup>他们去了，便看见一匹驴驹拴在门外街道上，就把它解开。<sup class="versenum">5&nbsp;</sup>在那里站着的人有几个说：&ldquo;你们解驴驹做什么？&rdquo;<sup class="versenum">6&nbsp;</sup>门徒照着耶稣所说的回答，那些人就任凭他们牵去了。<sup class="versenum">7&nbsp;</sup>他们把驴驹牵到耶稣那里，把自己的衣服搭在上面，耶稣就骑上。<sup class="versenum">8&nbsp;</sup>有许多人把衣服铺在路上，也有人把田间的树枝砍下来铺在路上。<sup class="versenum">9&nbsp;</sup>前行后随的人都喊着说：&ldquo;和散那！奉主名来的是应当称颂的！<sup class="versenum">10&nbsp;</sup>那将要来的我祖<u class="person underline">大卫</u>之国是应当称颂的！高高在上和散那！&rdquo;<sup class="versenum">11&nbsp;</sup>耶稣进了耶路撒冷，入了圣殿，周围看了各样物件。天色已晚，就和十二个门徒出城，往伯大尼去了。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">无花果树被咒诅</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">12&nbsp;</sup>第二天，他们从伯大尼出来，耶稣饿了。远远地看见一棵无花果树，树上有叶子，就往那里去，或者在树上可以找着什么。<sup class="versenum">13&nbsp;</sup>到了树下，竟找不着什么，不过有叶子，因为不是收无花果的时候。<sup class="versenum">14&nbsp;</sup>耶稣就对树说：&ldquo;从今以后，永没有人吃你的果子！&rdquo;他的门徒也听见了。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">洁净圣殿</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">15&nbsp;</sup>他们来到耶路撒冷。耶稣进入圣殿，赶出殿里做买卖的人，推倒兑换银钱之人的桌子和卖鸽子之人的凳子，<sup class="versenum">16&nbsp;</sup>也不许人拿着器具从殿里经过。<sup class="versenum">17&nbsp;</sup>便教训他们，说：&ldquo;经上不是记着说&lsquo;我的殿必称为万国祷告的殿&rsquo;吗？你们倒使它成为贼窝了！&rdquo;<sup class="versenum">18&nbsp;</sup>祭司长和文士听见这话，就想法子要除灭耶稣，却又怕他，因为众人都稀奇他的教训。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">19&nbsp;</sup>每天晚上，耶稣出城去。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">20&nbsp;</sup>早晨，他们从那里经过，看见无花果树连根都枯干了。<sup class="versenum">21&nbsp;</sup><u class="person underline">彼得</u>想起耶稣的话来，就对他说：&ldquo;拉比，请看，你所咒诅的无花果树已经枯干了！&rdquo;<sup class="versenum">22&nbsp;</sup>耶稣回答说：&ldquo;你们当信服神。<sup class="versenum">23&nbsp;</sup>我实在告诉你们：无论何人对这座山说：&lsquo;你挪开此地，投在海里！&rsquo;，他若心里不疑惑，只信他所说的必成，就必给他成了。<sup class="versenum">24&nbsp;</sup>所以我告诉你们，凡你们祷告祈求的，无论是什么，只要信是得着的，就必得着。<sup class="versenum">25&nbsp;</sup>你们站着祷告的时候，若想起有人得罪你们，就当饶恕他，好叫你们在天上的父也饶恕你们的过犯。<sup class="versenum">26&nbsp;</sup>你们若不饶恕人，你们在天上的父也不饶恕你们的过犯。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop7')"> 约翰福音12:12-19</span>） </span></span></span>

	<div class="popup invisible" id="pop7"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">12&nbsp;</sup>第二天，有许多上来过节的人听见耶稣将到耶路撒冷，<sup class="versenum">13&nbsp;</sup>就拿着棕树枝出去迎接他，喊着说：&ldquo;和散那！奉主名来的以色列王是应当称颂的！&rdquo;<sup class="versenum">14&nbsp;</sup>耶稣得了一个驴驹，就骑上，如经上所记的说：<sup class="versenum">15&nbsp;</sup>&ldquo;锡安的民哪，不要惧怕！你的王骑着驴驹来了。&rdquo;<sup class="versenum">16&nbsp;</sup>这些事门徒起先不明白，等到耶稣得了荣耀以后，才想起这话是指着他写的，并且众人果然向他这样行了。<sup class="versenum">17&nbsp;</sup>当耶稣呼唤<u class="person underline">拉撒路</u>，叫他从死复活出坟墓的时候，同耶稣在那里的众人就作见证。<sup class="versenum">18&nbsp;</sup>众人因听见耶稣行了这神迹，就去迎接他。<sup class="versenum">19&nbsp;</sup>法利赛人彼此说：&ldquo;看哪，你们是徒劳无益，世人都随从他去了！&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	</li>
</ul>
</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路19:47-48</p>

<p class="forward bible"><sup>47</sup>耶稣天天在殿里教训人。祭司长和文士与百姓的尊长都想要杀他，<sup>48</sup>但寻不出法子来，因为百姓都侧耳听他。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶路撒冷因错过了耶稣的造访，而遭到审判的命运；人若有机会与耶稣相遇却擦身而过，会有什么结果？这段经文对你的提醒是什么？为什么？</li>
	<li class="forward">教会除了是一个敬拜上帝的地方，它是否可以拿来做其它的用途？有什么原则性的规限吗？什么是敬拜神合宜的态度？我们有轻忽的地方吗？</li>
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
	<li class="forward">与门徒一起关心和探访在病痛中的亲友，为他们祷告，相信神要使用你们走入人群，将耶稣基督的平安带到他们当中，让他们也来尝尝主恩的滋味和医治。</li>
	<li class="forward">在小组中持续用祷告为所处的城市代求，求神的荣耀、医治、慈爱和公义临到，让这城市成为让基督作王的喜乐之城、基督的名被高举、人心归回神。</li>
	<li class="forward">为教会祷告，求神洁净教会成为祂荣耀的新妇，见证祂的名。也求神恩膏和使用教会的牧者同工，使他们大有信心，充满喜乐和热情服事主；他们的家庭蒙神眷顾保守和供应，有生命有榜样。</li>
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

<p>爱我们的天父，赞美祢是赦免和医治的神，投靠祢的人何等有福！世人都是按祢的形象被造，在祢眼中都是宝贝。谢谢祢从没有遗弃或轻看任何来到祢面前寻求帮助的人，祢知道世人的不信与悖逆，但祢却依然以无条件的爱来包容和接纳。感谢主耶稣来到世上，向我们彰显天父的公义和慈爱，使我们的生命被更新和医治。主啊，让我们天天充满热情的爱祢，并存谦卑与良善的心，服事我们身边的人，欢喜等候主再来的那日。奉主耶稣的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->