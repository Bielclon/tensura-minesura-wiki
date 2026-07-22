(function () {
  "use strict";

  // ---------------- i18n ----------------

  const I18N = {
    es: {
      brandSub: "Wiki oficial",
      searchPlaceholder: "Buscar en la wiki...",
      searchEmpty: "Sin resultados",
      kindSkill: "Skill",
      kindCommand: "Comando",
      navHome: "Inicio",
      navUniqueSkills: "Unique Skills",
      navPantheon: "Panteón Nórdico",
      navOther: "Otras Unique Skills",
      navCommands: "Comandos",
      navCommandList: "Lista de comandos",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Wiki oficial del mod. Documenta las <strong>${n} Unique Skills</strong> obtenibles de forma natural al reencarnar y los <strong>${m} comandos</strong> que añade el mod. Usa el buscador o el menú de la izquierda para navegar.`,
      statUnique: "Unique Skills",
      statPantheon: "Panteón Nórdico",
      statOther: "Otras Unique Skills",
      statCommands: "Comandos",
      featuredSkills: "Unique Skills destacadas",
      sectionCommands: "Comandos",
      crumbsHome: "Inicio",
      crumbsSkills: "Unique Skills",
      crumbsCommands: "Comandos",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Todas las Unique Skills que se pueden obtener de forma natural al reencarnar (${n} en total).`,
      pantheonLede: "Las 12 Unique Skills que evolucionan a un Ultimate Skill con nombre de dios nórdico (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir y Surtr) al ser maestreadas y despertar.",
      otherLede: "Unique Skills obtenibles por reencarnación que no pertenecen al Panteón Nórdico y no evolucionan a un Ultimate Skill.",
      infoType: "Tipo",
      infoTypeVal: "Unique Skill",
      infoCategory: "Categoría",
      infoObtained: "Obtención",
      infoObtainedVal: "Reencarnación natural",
      infoEvolves: "Evoluciona",
      prev: "Anterior",
      next: "Siguiente",
      commandsPageLede: (n) => `Todos los comandos añadidos por el mod (${n} en total).`,
      subcommands: "Subcomandos",
      colSyntax: "Sintaxis",
      colDesc: "Descripción",
      notFoundSkill: "No se encontró ese unique skill.",
      notFoundCommand: "No se encontró ese comando.",
      backHome: "Volver al inicio",
      permOp: "op",
      permPlayer: "jugador",
      permMixed: "mixto",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `Las ${n} Intrinsic Skills raciales que añade el mod — se obtienen automáticamente por tu raza, no por azar de reencarnación.`,
      infoRace: "Raza",
      infoObtainedRaceVal: "Innata de la raza",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Generado desde",
    },
    en: {
      brandSub: "Official wiki",
      searchPlaceholder: "Search the wiki...",
      searchEmpty: "No results",
      kindSkill: "Skill",
      kindCommand: "Command",
      navHome: "Home",
      navUniqueSkills: "Unique Skills",
      navPantheon: "Norse Pantheon",
      navOther: "Other Unique Skills",
      navCommands: "Commands",
      navCommandList: "Command list",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Official mod wiki. Documents the <strong>${n} Unique Skills</strong> naturally obtainable through reincarnation and the <strong>${m} commands</strong> added by the mod. Use the search box or the left menu to navigate.`,
      statUnique: "Unique Skills",
      statPantheon: "Norse Pantheon",
      statOther: "Other Unique Skills",
      statCommands: "Commands",
      featuredSkills: "Featured Unique Skills",
      sectionCommands: "Commands",
      crumbsHome: "Home",
      crumbsSkills: "Unique Skills",
      crumbsCommands: "Commands",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `All the Unique Skills naturally obtainable through reincarnation (${n} total).`,
      pantheonLede: "The 12 Unique Skills that evolve into a Norse-named Ultimate Skill (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir and Surtr) once mastered and awakened.",
      otherLede: "Unique Skills obtainable through reincarnation that don't belong to the Norse Pantheon and don't evolve into an Ultimate Skill.",
      infoType: "Type",
      infoTypeVal: "Unique Skill",
      infoCategory: "Category",
      infoObtained: "Obtained via",
      infoObtainedVal: "Natural reincarnation",
      infoEvolves: "Evolves into",
      prev: "Previous",
      next: "Next",
      commandsPageLede: (n) => `All commands added by the mod (${n} total).`,
      subcommands: "Subcommands",
      colSyntax: "Syntax",
      colDesc: "Description",
      notFoundSkill: "That unique skill wasn't found.",
      notFoundCommand: "That command wasn't found.",
      backHome: "Back home",
      permOp: "op",
      permPlayer: "player",
      permMixed: "mixed",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `The ${n} racial Intrinsic Skills added by the mod — automatically granted by your race, not by reincarnation chance.`,
      infoRace: "Race",
      infoObtainedRaceVal: "Innate to the race",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Generated from",
    },
    pt: {
      brandSub: "Wiki oficial",
      searchPlaceholder: "Pesquisar na wiki...",
      searchEmpty: "Sem resultados",
      kindSkill: "Habilidade", kindCommand: "Comando",
      navHome: "Início", navUniqueSkills: "Unique Skills", navPantheon: "Panteão Nórdico",
      navOther: "Outras Unique Skills", navCommands: "Comandos", navCommandList: "Lista de comandos",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Wiki oficial do mod. Documenta as <strong>${n} Unique Skills</strong> obtidas naturalmente ao reencarnar e os <strong>${m} comandos</strong> adicionados pelo mod. Use a busca ou o menu à esquerda para navegar.`,
      statUnique: "Unique Skills", statPantheon: "Panteão Nórdico", statOther: "Outras Unique Skills", statCommands: "Comandos",
      featuredSkills: "Unique Skills em destaque", sectionCommands: "Comandos",
      crumbsHome: "Início", crumbsSkills: "Unique Skills", crumbsCommands: "Comandos",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Todas as Unique Skills obtidas naturalmente ao reencarnar (${n} no total).`,
      pantheonLede: "As 12 Unique Skills que evoluem para uma Ultimate Skill com nome de um deus nórdico (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir e Surtr) ao serem maestreadas e despertarem.",
      otherLede: "Unique Skills obtidas por reencarnação que não pertencem ao Panteão Nórdico e não evoluem para uma Ultimate Skill.",
      infoType: "Tipo", infoTypeVal: "Unique Skill", infoCategory: "Categoria",
      infoObtained: "Obtenção", infoObtainedVal: "Reencarnação natural", infoEvolves: "Evolui para",
      prev: "Anterior", next: "Próximo",
      commandsPageLede: (n) => `Todos os comandos adicionados pelo mod (${n} no total).`,
      subcommands: "Subcomandos", colSyntax: "Sintaxe", colDesc: "Descrição",
      notFoundSkill: "Essa unique skill não foi encontrada.", notFoundCommand: "Esse comando não foi encontrado.",
      backHome: "Voltar ao início", permOp: "op", permPlayer: "jogador", permMixed: "misto",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `As ${n} Intrinsic Skills raciais adicionadas pelo mod — concedidas automaticamente pela sua raça, não pelo acaso da reencarnação.`,
      infoRace: "Raça",
      infoObtainedRaceVal: "Inata da raça",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Gerado a partir de",
    },
    fr: {
      brandSub: "Wiki officiel",
      searchPlaceholder: "Rechercher dans le wiki...",
      searchEmpty: "Aucun résultat",
      kindSkill: "Compétence", kindCommand: "Commande",
      navHome: "Accueil", navUniqueSkills: "Unique Skills", navPantheon: "Panthéon nordique",
      navOther: "Autres Unique Skills", navCommands: "Commandes", navCommandList: "Liste des commandes",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Wiki officiel du mod. Répertorie les <strong>${n} Unique Skills</strong> obtenues naturellement par réincarnation et les <strong>${m} commandes</strong> ajoutées par le mod. Utilisez la recherche ou le menu de gauche pour naviguer.`,
      statUnique: "Unique Skills", statPantheon: "Panthéon nordique", statOther: "Autres Unique Skills", statCommands: "Commandes",
      featuredSkills: "Unique Skills à la une", sectionCommands: "Commandes",
      crumbsHome: "Accueil", crumbsSkills: "Unique Skills", crumbsCommands: "Commandes",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Toutes les Unique Skills obtenues naturellement par réincarnation (${n} au total).`,
      pantheonLede: "Les 12 Unique Skills qui évoluent en Ultimate Skill portant le nom d'un dieu nordique (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir et Surtr) une fois maîtrisées et éveillées.",
      otherLede: "Unique Skills obtenues par réincarnation qui n'appartiennent pas au Panthéon nordique et n'évoluent pas en Ultimate Skill.",
      infoType: "Type", infoTypeVal: "Unique Skill", infoCategory: "Catégorie",
      infoObtained: "Obtention", infoObtainedVal: "Réincarnation naturelle", infoEvolves: "Évolue en",
      prev: "Précédent", next: "Suivant",
      commandsPageLede: (n) => `Toutes les commandes ajoutées par le mod (${n} au total).`,
      subcommands: "Sous-commandes", colSyntax: "Syntaxe", colDesc: "Description",
      notFoundSkill: "Cette unique skill est introuvable.", notFoundCommand: "Cette commande est introuvable.",
      backHome: "Retour à l'accueil", permOp: "op", permPlayer: "joueur", permMixed: "mixte",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `Les ${n} Intrinsic Skills raciales ajoutées par le mod — accordées automatiquement par votre race, pas par le hasard de la réincarnation.`,
      infoRace: "Race",
      infoObtainedRaceVal: "Innée à la race",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Généré à partir de",
    },
    de: {
      brandSub: "Offizielles Wiki",
      searchPlaceholder: "Wiki durchsuchen...",
      searchEmpty: "Keine Ergebnisse",
      kindSkill: "Fähigkeit", kindCommand: "Befehl",
      navHome: "Start", navUniqueSkills: "Unique Skills", navPantheon: "Nordisches Pantheon",
      navOther: "Weitere Unique Skills", navCommands: "Befehle", navCommandList: "Befehlsliste",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Offizielles Mod-Wiki. Dokumentiert die <strong>${n} Unique Skills</strong>, die man auf natürliche Weise durch Reinkarnation erhält, sowie die <strong>${m} Befehle</strong> des Mods. Nutze die Suche oder das Menü links zur Navigation.`,
      statUnique: "Unique Skills", statPantheon: "Nordisches Pantheon", statOther: "Weitere Unique Skills", statCommands: "Befehle",
      featuredSkills: "Vorgestellte Unique Skills", sectionCommands: "Befehle",
      crumbsHome: "Start", crumbsSkills: "Unique Skills", crumbsCommands: "Befehle",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Alle Unique Skills, die man natürlich durch Reinkarnation erhalten kann (${n} insgesamt).`,
      pantheonLede: "Die 12 Unique Skills, die nach dem Meistern und Erwachen zu einer Ultimate Skill mit dem Namen eines nordischen Gottes werden (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir und Surtr).",
      otherLede: "Unique Skills, die durch Reinkarnation erhältlich sind, aber nicht zum Nordischen Pantheon gehören und sich nicht zu einer Ultimate Skill entwickeln.",
      infoType: "Typ", infoTypeVal: "Unique Skill", infoCategory: "Kategorie",
      infoObtained: "Erhalt", infoObtainedVal: "Natürliche Reinkarnation", infoEvolves: "Entwickelt sich zu",
      prev: "Zurück", next: "Weiter",
      commandsPageLede: (n) => `Alle vom Mod hinzugefügten Befehle (${n} insgesamt).`,
      subcommands: "Unterbefehle", colSyntax: "Syntax", colDesc: "Beschreibung",
      notFoundSkill: "Diese Unique Skill wurde nicht gefunden.", notFoundCommand: "Dieser Befehl wurde nicht gefunden.",
      backHome: "Zurück zur Startseite", permOp: "op", permPlayer: "Spieler", permMixed: "gemischt",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `Die ${n} rassischen Intrinsic Skills des Mods — automatisch durch deine Rasse verliehen, nicht durch Reinkarnationszufall.`,
      infoRace: "Rasse",
      infoObtainedRaceVal: "Der Rasse angeboren",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Erstellt aus",
    },
    it: {
      brandSub: "Wiki ufficiale",
      searchPlaceholder: "Cerca nella wiki...",
      searchEmpty: "Nessun risultato",
      kindSkill: "Abilità", kindCommand: "Comando",
      navHome: "Home", navUniqueSkills: "Unique Skills", navPantheon: "Pantheon Norreno",
      navOther: "Altre Unique Skills", navCommands: "Comandi", navCommandList: "Elenco comandi",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Wiki ufficiale della mod. Documenta le <strong>${n} Unique Skills</strong> ottenibili naturalmente reincarnandosi e i <strong>${m} comandi</strong> aggiunti dalla mod. Usa la ricerca o il menu a sinistra per navigare.`,
      statUnique: "Unique Skills", statPantheon: "Pantheon Norreno", statOther: "Altre Unique Skills", statCommands: "Comandi",
      featuredSkills: "Unique Skills in evidenza", sectionCommands: "Comandi",
      crumbsHome: "Home", crumbsSkills: "Unique Skills", crumbsCommands: "Comandi",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Tutte le Unique Skills ottenibili naturalmente reincarnandosi (${n} in totale).`,
      pantheonLede: "Le 12 Unique Skills che, una volta maestrate e risvegliate, evolvono in una Ultimate Skill con il nome di un dio norreno (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir e Surtr).",
      otherLede: "Unique Skills ottenibili per reincarnazione che non appartengono al Pantheon Norreno e non evolvono in una Ultimate Skill.",
      infoType: "Tipo", infoTypeVal: "Unique Skill", infoCategory: "Categoria",
      infoObtained: "Ottenimento", infoObtainedVal: "Reincarnazione naturale", infoEvolves: "Evolve in",
      prev: "Precedente", next: "Successivo",
      commandsPageLede: (n) => `Tutti i comandi aggiunti dalla mod (${n} in totale).`,
      subcommands: "Sottocomandi", colSyntax: "Sintassi", colDesc: "Descrizione",
      notFoundSkill: "Unique skill non trovata.", notFoundCommand: "Comando non trovato.",
      backHome: "Torna alla home", permOp: "op", permPlayer: "giocatore", permMixed: "misto",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `Le ${n} Intrinsic Skills razziali aggiunte dalla mod — concesse automaticamente dalla tua razza, non dal caso della reincarnazione.`,
      infoRace: "Razza",
      infoObtainedRaceVal: "Innata della razza",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Generato da",
    },
    ru: {
      brandSub: "Официальная вики",
      searchPlaceholder: "Поиск по вики...",
      searchEmpty: "Нет результатов",
      kindSkill: "Навык", kindCommand: "Команда",
      navHome: "Главная", navUniqueSkills: "Unique Skills", navPantheon: "Скандинавский пантеон",
      navOther: "Другие Unique Skills", navCommands: "Команды", navCommandList: "Список команд",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Официальная вики мода. Описывает <strong>${n} Unique Skills</strong>, получаемых естественным образом при реинкарнации, и <strong>${m} команд</strong>, добавленных модом. Используйте поиск или меню слева для навигации.`,
      statUnique: "Unique Skills", statPantheon: "Скандинавский пантеон", statOther: "Другие Unique Skills", statCommands: "Команды",
      featuredSkills: "Избранные Unique Skills", sectionCommands: "Команды",
      crumbsHome: "Главная", crumbsSkills: "Unique Skills", crumbsCommands: "Команды",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Все Unique Skills, получаемые естественным образом при реинкарнации (всего ${n}).`,
      pantheonLede: "12 Unique Skills, которые после освоения и пробуждения превращаются в Ultimate Skill с именем скандинавского бога (Тор, Фенрир, Бальдр, Тюр, Ёрмунганд, Хеймдалль, Локи, Один, Фафнир, Фрейя, Имир и Сурт).",
      otherLede: "Unique Skills, получаемые при реинкарнации, но не относящиеся к скандинавскому пантеону и не превращающиеся в Ultimate Skill.",
      infoType: "Тип", infoTypeVal: "Unique Skill", infoCategory: "Категория",
      infoObtained: "Получение", infoObtainedVal: "Естественная реинкарнация", infoEvolves: "Превращается в",
      prev: "Назад", next: "Далее",
      commandsPageLede: (n) => `Все команды, добавленные модом (всего ${n}).`,
      subcommands: "Подкоманды", colSyntax: "Синтаксис", colDesc: "Описание",
      notFoundSkill: "Этот unique skill не найден.", notFoundCommand: "Эта команда не найдена.",
      backHome: "Вернуться на главную", permOp: "op", permPlayer: "игрок", permMixed: "смешанный",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `${n} расовых Intrinsic Skills, добавленных модом — даются автоматически по вашей расе, а не случайно при реинкарнации.`,
      infoRace: "Раса",
      infoObtainedRaceVal: "Врождённая для расы",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Сгенерировано из",
    },
    ja: {
      brandSub: "公式Wiki",
      searchPlaceholder: "Wiki内を検索...",
      searchEmpty: "結果なし",
      kindSkill: "スキル", kindCommand: "コマンド",
      navHome: "ホーム", navUniqueSkills: "ユニークスキル", navPantheon: "北欧神話パンテオン",
      navOther: "その他のユニークスキル", navCommands: "コマンド", navCommandList: "コマンド一覧",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `MODの公式Wiki。転生で自然に入手できる<strong>${n}種のユニークスキル</strong>と、MODが追加する<strong>${m}種のコマンド</strong>を掲載しています。左のメニューまたは検索から移動してください。`,
      statUnique: "ユニークスキル", statPantheon: "北欧神話パンテオン", statOther: "その他のユニークスキル", statCommands: "コマンド",
      featuredSkills: "注目のユニークスキル", sectionCommands: "コマンド",
      crumbsHome: "ホーム", crumbsSkills: "ユニークスキル", crumbsCommands: "コマンド",
      skillsPageTitle: "ユニークスキル",
      skillsPageLede: (n) => `転生で自然に入手できる全てのユニークスキル（全${n}種）。`,
      pantheonLede: "熟練・覚醒すると北欧神話の神の名を持つアルティメットスキルへ進化する12種のユニークスキル（トール、フェンリル、バルドル、テュール、ヨルムンガンド、ヘイムダル、ロキ、オーディン、ファフニール、フレイヤ、ユミル、スルト）。",
      otherLede: "転生で入手できるが、北欧神話パンテオンには属さず、アルティメットスキルへ進化しないユニークスキル。",
      infoType: "種別", infoTypeVal: "ユニークスキル", infoCategory: "カテゴリ",
      infoObtained: "入手方法", infoObtainedVal: "自然な転生", infoEvolves: "進化先",
      prev: "前へ", next: "次へ",
      commandsPageLede: (n) => `MODが追加する全コマンド（全${n}種）。`,
      subcommands: "サブコマンド", colSyntax: "構文", colDesc: "説明",
      notFoundSkill: "そのユニークスキルは見つかりませんでした。", notFoundCommand: "そのコマンドは見つかりませんでした。",
      backHome: "ホームに戻る", permOp: "op", permPlayer: "プレイヤー", permMixed: "混合",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `MODが追加する${n}種の種族固有スキル（Intrinsic Skill）——転生の運ではなく、種族によって自動的に付与されます。`,
      infoRace: "種族",
      infoObtainedRaceVal: "種族固有",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "生成元",
    },
    ko: {
      brandSub: "공식 위키",
      searchPlaceholder: "위키 검색...",
      searchEmpty: "결과 없음",
      kindSkill: "스킬", kindCommand: "명령어",
      navHome: "홈", navUniqueSkills: "유니크 스킬", navPantheon: "북유럽 판테온",
      navOther: "기타 유니크 스킬", navCommands: "명령어", navCommandList: "명령어 목록",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `모드 공식 위키입니다. 환생으로 자연스럽게 얻을 수 있는 <strong>${n}개의 유니크 스킬</strong>과 모드가 추가하는 <strong>${m}개의 명령어</strong>를 정리했습니다. 검색이나 왼쪽 메뉴로 이동하세요.`,
      statUnique: "유니크 스킬", statPantheon: "북유럽 판테온", statOther: "기타 유니크 스킬", statCommands: "명령어",
      featuredSkills: "추천 유니크 스킬", sectionCommands: "명령어",
      crumbsHome: "홈", crumbsSkills: "유니크 스킬", crumbsCommands: "명령어",
      skillsPageTitle: "유니크 스킬",
      skillsPageLede: (n) => `환생으로 자연스럽게 얻을 수 있는 모든 유니크 스킬 (총 ${n}개).`,
      pantheonLede: "숙련 및 각성 시 북유럽 신의 이름을 가진 얼티밋 스킬로 진화하는 12개의 유니크 스킬 (토르, 펜리르, 발드르, 티르, 요르문간드, 헤임달, 로키, 오딘, 파프니르, 프레이야, 위미르, 수르트).",
      otherLede: "환생으로 얻을 수 있지만 북유럽 판테온에 속하지 않고 얼티밋 스킬로 진화하지 않는 유니크 스킬.",
      infoType: "유형", infoTypeVal: "유니크 스킬", infoCategory: "분류",
      infoObtained: "획득 방법", infoObtainedVal: "자연스러운 환생", infoEvolves: "진화 대상",
      prev: "이전", next: "다음",
      commandsPageLede: (n) => `모드가 추가하는 모든 명령어 (총 ${n}개).`,
      subcommands: "하위 명령어", colSyntax: "구문", colDesc: "설명",
      notFoundSkill: "해당 유니크 스킬을 찾을 수 없습니다.", notFoundCommand: "해당 명령어를 찾을 수 없습니다.",
      backHome: "홈으로 돌아가기", permOp: "op", permPlayer: "플레이어", permMixed: "혼합",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `모드가 추가하는 ${n}개의 종족 고유 스킬(Intrinsic Skill) — 환생 운이 아니라 종족에 의해 자동으로 부여됩니다.`,
      infoRace: "종족",
      infoObtainedRaceVal: "종족 고유",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "생성 출처",
    },
    zh: {
      brandSub: "官方Wiki",
      searchPlaceholder: "搜索Wiki...",
      searchEmpty: "无结果",
      kindSkill: "技能", kindCommand: "指令",
      navHome: "首页", navUniqueSkills: "固有技能", navPantheon: "北欧万神殿",
      navOther: "其他固有技能", navCommands: "指令", navCommandList: "指令列表",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `本模组的官方Wiki，收录了转生后可自然获得的<strong>${n}个固有技能</strong>，以及模组新增的<strong>${m}个指令</strong>。使用搜索框或左侧菜单进行导航。`,
      statUnique: "固有技能", statPantheon: "北欧万神殿", statOther: "其他固有技能", statCommands: "指令",
      featuredSkills: "精选固有技能", sectionCommands: "指令",
      crumbsHome: "首页", crumbsSkills: "固有技能", crumbsCommands: "指令",
      skillsPageTitle: "固有技能",
      skillsPageLede: (n) => `所有可通过转生自然获得的固有技能（共${n}个）。`,
      pantheonLede: "这12个固有技能在熟练并觉醒后，会进化为以北欧神祇命名的究极技能（雷神托尔、芬里尔、巴德尔、提尔、耶梦加得、海姆达尔、洛基、奥丁、法夫尼尔、弗蕾雅、尤弥尔和苏尔特）。",
      otherLede: "可通过转生获得，但不属于北欧万神殿、也不会进化为究极技能的固有技能。",
      infoType: "类型", infoTypeVal: "固有技能", infoCategory: "分类",
      infoObtained: "获取方式", infoObtainedVal: "自然转生", infoEvolves: "进化为",
      prev: "上一个", next: "下一个",
      commandsPageLede: (n) => `模组新增的所有指令（共${n}个）。`,
      subcommands: "子指令", colSyntax: "语法", colDesc: "描述",
      notFoundSkill: "未找到该固有技能。", notFoundCommand: "未找到该指令。",
      backHome: "返回首页", permOp: "op", permPlayer: "玩家", permMixed: "混合",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `模组新增的${n}个种族固有技能（Intrinsic Skill）——由你的种族自动授予，而非转生随机获得。`,
      infoRace: "种族",
      infoObtainedRaceVal: "种族天生",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "生成自",
    },
    ar: {
      brandSub: "ويكي رسمي",
      searchPlaceholder: "البحث في الويكي...",
      searchEmpty: "لا توجد نتائج",
      kindSkill: "مهارة", kindCommand: "أمر",
      navHome: "الرئيسية", navUniqueSkills: "المهارات الفريدة", navPantheon: "الآلهة الإسكندنافية",
      navOther: "مهارات فريدة أخرى", navCommands: "الأوامر", navCommandList: "قائمة الأوامر",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `ويكي رسمي للمود. يوثّق <strong>${n} مهارة فريدة</strong> يمكن الحصول عليها بشكل طبيعي عبر التقمص، و<strong>${m} أمرًا</strong> يضيفها المود. استخدم البحث أو القائمة الجانبية للتنقل.`,
      statUnique: "المهارات الفريدة", statPantheon: "الآلهة الإسكندنافية", statOther: "مهارات فريدة أخرى", statCommands: "الأوامر",
      featuredSkills: "مهارات فريدة مميزة", sectionCommands: "الأوامر",
      crumbsHome: "الرئيسية", crumbsSkills: "المهارات الفريدة", crumbsCommands: "الأوامر",
      skillsPageTitle: "المهارات الفريدة",
      skillsPageLede: (n) => `جميع المهارات الفريدة التي يمكن الحصول عليها طبيعيًا عبر التقمص (${n} إجمالاً).`,
      pantheonLede: "المهارات الفريدة الاثنتا عشرة التي تتطور، بعد الإتقان والصحوة، إلى مهارة قصوى تحمل اسم إله إسكندنافي (ثور، فينرير، بالدر، تير، يورمنغاندر، هايمدال، لوكي، أودين، فافنير، فريا، يمير، وسورتر).",
      otherLede: "مهارات فريدة يمكن الحصول عليها عبر التقمص لكنها لا تنتمي إلى الآلهة الإسكندنافية ولا تتطور إلى مهارة قصوى.",
      infoType: "النوع", infoTypeVal: "مهارة فريدة", infoCategory: "الفئة",
      infoObtained: "طريقة الحصول", infoObtainedVal: "تقمص طبيعي", infoEvolves: "تتطور إلى",
      prev: "السابق", next: "التالي",
      commandsPageLede: (n) => `جميع الأوامر التي يضيفها المود (${n} إجمالاً).`,
      subcommands: "الأوامر الفرعية", colSyntax: "الصيغة", colDesc: "الوصف",
      notFoundSkill: "لم يتم العثور على هذه المهارة الفريدة.", notFoundCommand: "لم يتم العثور على هذا الأمر.",
      backHome: "العودة إلى الرئيسية", permOp: "مشرف", permPlayer: "لاعب", permMixed: "مختلط",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `${n} من المهارات الفطرية العرقية (Intrinsic Skills) التي يضيفها المود — تُمنح تلقائيًا حسب عرقك، لا عبر حظ التقمص.`,
      infoRace: "العرق",
      infoObtainedRaceVal: "فطرية للعرق",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "تم إنشاؤه من",
    },
    hi: {
      brandSub: "आधिकारिक विकी",
      searchPlaceholder: "विकी में खोजें...",
      searchEmpty: "कोई परिणाम नहीं",
      kindSkill: "स्किल", kindCommand: "कमांड",
      navHome: "होम", navUniqueSkills: "यूनिक स्किल्स", navPantheon: "नॉर्स देवगण",
      navOther: "अन्य यूनिक स्किल्स", navCommands: "कमांड्स", navCommandList: "कमांड सूची",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `मॉड की आधिकारिक विकी। इसमें पुनर्जन्म से स्वाभाविक रूप से मिलने वाली <strong>${n} यूनिक स्किल्स</strong> और मॉड द्वारा जोड़े गए <strong>${m} कमांड्स</strong> का विवरण है। नेविगेट करने के लिए सर्च या बाईं ओर के मेनू का उपयोग करें।`,
      statUnique: "यूनिक स्किल्स", statPantheon: "नॉर्स देवगण", statOther: "अन्य यूनिक स्किल्स", statCommands: "कमांड्स",
      featuredSkills: "प्रमुख यूनिक स्किल्स", sectionCommands: "कमांड्स",
      crumbsHome: "होम", crumbsSkills: "यूनिक स्किल्स", crumbsCommands: "कमांड्स",
      skillsPageTitle: "यूनिक स्किल्स",
      skillsPageLede: (n) => `पुनर्जन्म से स्वाभाविक रूप से प्राप्त होने वाली सभी यूनिक स्किल्स (कुल ${n})।`,
      pantheonLede: "वे 12 यूनिक स्किल्स जो निपुण होने और जागृत होने पर नॉर्स देवता के नाम वाली अल्टीमेट स्किल में विकसित होती हैं (थोर, फेनरिर, बाल्डर, टायर, योर्मुनगांड्र, हाइमडॉल, लोकी, ओडिन, फाफनिर, फ्रेया, यमीर और सर्टर)।",
      otherLede: "पुनर्जन्म से प्राप्त होने वाली वे यूनिक स्किल्स जो नॉर्स देवगण से संबंधित नहीं हैं और अल्टीमेट स्किल में विकसित नहीं होतीं।",
      infoType: "प्रकार", infoTypeVal: "यूनिक स्किल", infoCategory: "श्रेणी",
      infoObtained: "प्राप्ति", infoObtainedVal: "स्वाभाविक पुनर्जन्म", infoEvolves: "विकसित होती है",
      prev: "पिछला", next: "अगला",
      commandsPageLede: (n) => `मॉड द्वारा जोड़े गए सभी कमांड्स (कुल ${n})।`,
      subcommands: "सब-कमांड्स", colSyntax: "सिंटैक्स", colDesc: "विवरण",
      notFoundSkill: "यह यूनिक स्किल नहीं मिली।", notFoundCommand: "यह कमांड नहीं मिला।",
      backHome: "होम पर वापस जाएं", permOp: "op", permPlayer: "खिलाड़ी", permMixed: "मिश्रित",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `मॉड द्वारा जोड़े गए ${n} रेशियल Intrinsic Skills — ये आपकी रेस द्वारा स्वतः मिलती हैं, पुनर्जन्म की किस्मत से नहीं।`,
      infoRace: "नस्ल",
      infoObtainedRaceVal: "नस्ल में जन्मजात",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "इससे जनरेट किया गया",
    },
    pl: {
      brandSub: "Oficjalna wiki",
      searchPlaceholder: "Szukaj w wiki...",
      searchEmpty: "Brak wyników",
      kindSkill: "Umiejętność", kindCommand: "Komenda",
      navHome: "Strona główna", navUniqueSkills: "Unique Skills", navPantheon: "Panteon nordycki",
      navOther: "Inne Unique Skills", navCommands: "Komendy", navCommandList: "Lista komend",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Oficjalna wiki moda. Opisuje <strong>${n} Unique Skills</strong> zdobywanych naturalnie poprzez reinkarnację oraz <strong>${m} komend</strong> dodanych przez moda. Użyj wyszukiwarki lub menu po lewej, aby nawigować.`,
      statUnique: "Unique Skills", statPantheon: "Panteon nordycki", statOther: "Inne Unique Skills", statCommands: "Komendy",
      featuredSkills: "Polecane Unique Skills", sectionCommands: "Komendy",
      crumbsHome: "Strona główna", crumbsSkills: "Unique Skills", crumbsCommands: "Komendy",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Wszystkie Unique Skills zdobywane naturalnie poprzez reinkarnację (${n} łącznie).`,
      pantheonLede: "12 Unique Skills, które po opanowaniu i przebudzeniu ewoluują w Ultimate Skill noszącą imię nordyckiego boga (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir i Surtr).",
      otherLede: "Unique Skills zdobywane poprzez reinkarnację, które nie należą do Panteonu nordyckiego i nie ewoluują w Ultimate Skill.",
      infoType: "Typ", infoTypeVal: "Unique Skill", infoCategory: "Kategoria",
      infoObtained: "Sposób zdobycia", infoObtainedVal: "Naturalna reinkarnacja", infoEvolves: "Ewoluuje w",
      prev: "Poprzedni", next: "Następny",
      commandsPageLede: (n) => `Wszystkie komendy dodane przez moda (${n} łącznie).`,
      subcommands: "Podkomendy", colSyntax: "Składnia", colDesc: "Opis",
      notFoundSkill: "Nie znaleziono tej unique skill.", notFoundCommand: "Nie znaleziono tej komendy.",
      backHome: "Powrót do strony głównej", permOp: "op", permPlayer: "gracz", permMixed: "mieszane",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `${n} rasowych Intrinsic Skills dodanych przez moda — nadawane automatycznie przez twoją rasę, a nie przez los reinkarnacji.`,
      infoRace: "Rasa",
      infoObtainedRaceVal: "Wrodzona dla rasy",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Wygenerowano z",
    },
    tr: {
      brandSub: "Resmi wiki",
      searchPlaceholder: "Wiki'de ara...",
      searchEmpty: "Sonuç yok",
      kindSkill: "Yetenek", kindCommand: "Komut",
      navHome: "Ana Sayfa", navUniqueSkills: "Unique Skills", navPantheon: "İskandinav Panteonu",
      navOther: "Diğer Unique Skills", navCommands: "Komutlar", navCommandList: "Komut listesi",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Modun resmi wiki'si. Reenkarnasyon yoluyla doğal olarak elde edilen <strong>${n} Unique Skill</strong> ile modun eklediği <strong>${m} komutu</strong> belgeler. Gezinmek için aramayı veya soldaki menüyü kullanın.`,
      statUnique: "Unique Skills", statPantheon: "İskandinav Panteonu", statOther: "Diğer Unique Skills", statCommands: "Komutlar",
      featuredSkills: "Öne Çıkan Unique Skills", sectionCommands: "Komutlar",
      crumbsHome: "Ana Sayfa", crumbsSkills: "Unique Skills", crumbsCommands: "Komutlar",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Reenkarnasyon yoluyla doğal olarak elde edilen tüm Unique Skill'ler (toplam ${n}).`,
      pantheonLede: "Ustalaşıp uyandıklarında İskandinav tanrısı adını taşıyan bir Ultimate Skill'e dönüşen 12 Unique Skill (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir ve Surtr).",
      otherLede: "Reenkarnasyonla elde edilebilen ancak İskandinav Panteonu'na ait olmayan ve Ultimate Skill'e dönüşmeyen Unique Skill'ler.",
      infoType: "Tür", infoTypeVal: "Unique Skill", infoCategory: "Kategori",
      infoObtained: "Elde Etme", infoObtainedVal: "Doğal reenkarnasyon", infoEvolves: "Şuna dönüşür",
      prev: "Önceki", next: "Sonraki",
      commandsPageLede: (n) => `Modun eklediği tüm komutlar (toplam ${n}).`,
      subcommands: "Alt komutlar", colSyntax: "Söz dizimi", colDesc: "Açıklama",
      notFoundSkill: "Bu unique skill bulunamadı.", notFoundCommand: "Bu komut bulunamadı.",
      backHome: "Ana sayfaya dön", permOp: "op", permPlayer: "oyuncu", permMixed: "karışık",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `Modun eklediği ${n} ırksal Intrinsic Skill — reenkarnasyon şansıyla değil, ırkınız tarafından otomatik olarak verilir.`,
      infoRace: "Irk",
      infoObtainedRaceVal: "Irka özgü (doğuştan)",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Şuradan oluşturuldu",
    },
    nl: {
      brandSub: "Officiële wiki",
      searchPlaceholder: "Zoek in de wiki...",
      searchEmpty: "Geen resultaten",
      kindSkill: "Skill", kindCommand: "Commando",
      navHome: "Home", navUniqueSkills: "Unique Skills", navPantheon: "Noords Pantheon",
      navOther: "Andere Unique Skills", navCommands: "Commando's", navCommandList: "Commandolijst",
      homeTitle: "Tensura: Minesura",
      homeIntro: (n, m) => `Officiële wiki van de mod. Documenteert de <strong>${n} Unique Skills</strong> die je op natuurlijke wijze via reïncarnatie krijgt, en de <strong>${m} commando's</strong> die de mod toevoegt. Gebruik de zoekbalk of het menu links om te navigeren.`,
      statUnique: "Unique Skills", statPantheon: "Noords Pantheon", statOther: "Andere Unique Skills", statCommands: "Commando's",
      featuredSkills: "Uitgelichte Unique Skills", sectionCommands: "Commando's",
      crumbsHome: "Home", crumbsSkills: "Unique Skills", crumbsCommands: "Commando's",
      skillsPageTitle: "Unique Skills",
      skillsPageLede: (n) => `Alle Unique Skills die op natuurlijke wijze via reïncarnatie te krijgen zijn (${n} in totaal).`,
      pantheonLede: "De 12 Unique Skills die na het masteren en ontwaken evolueren tot een Ultimate Skill vernoemd naar een Noordse god (Thor, Fenrir, Baldur, Tyr, Jörmungandr, Heimdall, Loki, Odin, Fafnir, Freya, Ymir en Surtr).",
      otherLede: "Unique Skills die via reïncarnatie te krijgen zijn maar niet tot het Noords Pantheon behoren en niet evolueren tot een Ultimate Skill.",
      infoType: "Type", infoTypeVal: "Unique Skill", infoCategory: "Categorie",
      infoObtained: "Verkrijging", infoObtainedVal: "Natuurlijke reïncarnatie", infoEvolves: "Evolueert naar",
      prev: "Vorige", next: "Volgende",
      commandsPageLede: (n) => `Alle commando's die de mod toevoegt (${n} in totaal).`,
      subcommands: "Subcommando's", colSyntax: "Syntax", colDesc: "Beschrijving",
      notFoundSkill: "Deze unique skill is niet gevonden.", notFoundCommand: "Dit commando is niet gevonden.",
      backHome: "Terug naar home", permOp: "op", permPlayer: "speler", permMixed: "gemengd",
      navIntrinsic: "Intrinsic Skills",
      statIntrinsic: "Intrinsic Skills",
      crumbsIntrinsic: "Intrinsic Skills",
      intrinsicsPageTitle: "Intrinsic Skills",
      intrinsicsPageLede: n => `De ${n} raciale Intrinsic Skills die de mod toevoegt — automatisch toegekend door je ras, niet door reïncarnatietoeval.`,
      infoRace: "Ras",
      infoObtainedRaceVal: "Aangeboren aan het ras",
      infoTypeValIntrinsic: "Intrinsic Skill",
      footer: "Gegenereerd van",
    }
  };

  const LANG_META = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'ru', name: 'Русский' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' },
    { code: 'ar', name: 'العربية' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'pl', name: 'Polski' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'nl', name: 'Nederlands' },
  ];
  const RTL_LANGS = new Set(['ar']);

  let lang = localStorage.getItem('tm-wiki-lang') || 'en';
  if (!I18N[lang]) lang = 'en';

  const t = (key, ...args) => {
    const v = I18N[lang][key];
    return typeof v === 'function' ? v(...args) : v;
  };

  // Content (skills/commands) is only authored in en/es; fall back to
  // English for any language that doesn't have a translation yet.
  function loc(obj) {
    if (obj == null) return obj;
    if (typeof obj !== 'object') return obj;
    return obj[lang] || obj.en || obj.es;
  }

  // All language variants of a localized field joined together (used for search so a
  // term matches regardless of the currently selected language). Safe on plain strings.
  function allText(obj) {
    if (obj == null) return '';
    if (typeof obj !== 'object') return String(obj);
    return Object.values(obj).join(' ');
  }

  // Fold per-language content (content-i18n.js) into the skill/intrinsic objects so
  // descHtml, excerpt, evolution and race become { en, es, ... } and can be localized
  // via loc(). English stays in the -data.js files as the fallback.
  (function mergeContentI18n() {
    const src = (typeof CONTENT_I18N !== 'undefined') ? CONTENT_I18N : {};
    const wrap = (list, type) => (list || []).forEach(s => {
      const tr = (src[type] || {})[s.id] || {};
      ['descHtml', 'excerpt', 'evolution', 'race'].forEach(f => {
        if (s[f] == null || typeof s[f] === 'object') return;
        const o = { en: s[f] };
        const t2 = tr[f];
        if (t2) for (const k in t2) o[k] = t2[k];
        s[f] = o;
      });
    });
    if (typeof SKILLS !== 'undefined') wrap(SKILLS, 'skills');
    if (typeof INTRINSIC_SKILLS !== 'undefined') wrap(INTRINSIC_SKILLS, 'intrinsics');
  })();

  function setLang(l) {
    lang = l;
    localStorage.setItem('tm-wiki-lang', l);
    document.documentElement.lang = l;
    document.documentElement.dir = RTL_LANGS.has(l) ? 'rtl' : 'ltr';
    buildSidebar();
    render();
    updateLangSelect();
  }

  function updateLangSelect() {
    const sel = document.getElementById('lang-select');
    if (sel) sel.value = lang;
  }

  // ---------------- Data helpers ----------------

  const PANTHEON_SKILLS = SKILLS.filter(s => s.group === 'pantheon');
  const OTHER_SKILLS = SKILLS.filter(s => s.group === 'other');

  const skillById = id => SKILLS.find(s => s.id === id);
  const commandById = id => COMMANDS.find(c => c.id === id);
  const intrinsicById = id => INTRINSIC_SKILLS.find(s => s.id === id);

  function esc(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function permLabel(permKey) {
    if (permKey === 'op') return t('permOp');
    if (permKey === 'player') return t('permPlayer');
    return t('permMixed');
  }

  function permBadgeClass(permKey) {
    if (permKey === 'op') return 'badge-op';
    if (permKey === 'player') return 'badge-player';
    return 'badge-mixed';
  }

  // ---------------- Sidebar ----------------

  function buildSidebar() {
    document.getElementById('brand-sub').textContent = t('brandSub');
    document.getElementById('global-search').placeholder = t('searchPlaceholder');
    document.querySelector('.sidebar-footer').innerHTML = `${t('footer')} <code>tensura_minesura-2.0.0.jar</code>`;

    const nav = document.getElementById('side-nav');
    nav.innerHTML = `
      <a href="#/" class="nav-top-link" data-route="/">${t('navHome')}</a>

      <a href="#/skills" class="nav-top-link" data-route="/skills">${t('navUniqueSkills')} <span class="nav-count">(${SKILLS.length})</span></a>
      <div class="nav-group" data-group="pantheon">
        <div class="nav-group-title" data-toggle="pantheon">
          <span class="chevron">▾</span> ${t('navPantheon')} <span class="nav-count">(${PANTHEON_SKILLS.length})</span>
        </div>
        <div class="nav-items">
          ${PANTHEON_SKILLS.map(s => `<a href="#/skill/${s.id}" class="nav-link" data-route="/skill/${s.id}">${esc(s.name)}</a>`).join('')}
        </div>
      </div>
      <div class="nav-group" data-group="other">
        <div class="nav-group-title" data-toggle="other">
          <span class="chevron">▾</span> ${t('navOther')} <span class="nav-count">(${OTHER_SKILLS.length})</span>
        </div>
        <div class="nav-items">
          ${OTHER_SKILLS.map(s => `<a href="#/skill/${s.id}" class="nav-link" data-route="/skill/${s.id}">${esc(s.name)}</a>`).join('')}
        </div>
      </div>

      <a href="#/intrinsics" class="nav-top-link" data-route="/intrinsics" style="margin-top:10px;">${t('navIntrinsic')} <span class="nav-count">(${INTRINSIC_SKILLS.length})</span></a>
      <div class="nav-group" data-group="intrinsic">
        <div class="nav-group-title" data-toggle="intrinsic">
          <span class="chevron">▾</span> ${t('navIntrinsic')} <span class="nav-count">(${INTRINSIC_SKILLS.length})</span>
        </div>
        <div class="nav-items">
          ${INTRINSIC_SKILLS.map(s => `<a href="#/intrinsic/${s.id}" class="nav-link" data-route="/intrinsic/${s.id}">${esc(s.name)}</a>`).join('')}
        </div>
      </div>

      <a href="#/commands" class="nav-top-link" data-route="/commands" style="margin-top:10px;">${t('navCommands')} <span class="nav-count">(${COMMANDS.length})</span></a>
      <div class="nav-group" data-group="commands">
        <div class="nav-group-title" data-toggle="commands">
          <span class="chevron">▾</span> ${t('navCommandList')} <span class="nav-count">(${COMMANDS.length})</span>
        </div>
        <div class="nav-items">
          ${COMMANDS.map(c => `<a href="#/command/${c.id}" class="nav-link" data-route="/command/${c.id}"><code>${esc(c.root)}</code></a>`).join('')}
        </div>
      </div>
    `;

    nav.querySelectorAll('[data-toggle]').forEach(el => {
      el.addEventListener('click', () => {
        el.parentElement.classList.toggle('collapsed');
      });
    });

    setActiveNav(parseRoute());
  }

  function setActiveNav(route) {
    document.querySelectorAll('.nav-link, .nav-top-link').forEach(el => {
      el.classList.toggle('active', el.dataset.route === route);
    });
    if (route.startsWith('/skill/')) {
      const id = route.split('/')[2];
      const grp = PANTHEON_SKILLS.some(s => s.id === id) ? 'pantheon' : 'other';
      const groupEl = document.querySelector(`.nav-group[data-group="${grp}"]`);
      if (groupEl) groupEl.classList.remove('collapsed');
    }
    if (route.startsWith('/command/')) {
      const groupEl = document.querySelector('.nav-group[data-group="commands"]');
      if (groupEl) groupEl.classList.remove('collapsed');
    }
    if (route.startsWith('/intrinsic/')) {
      const groupEl = document.querySelector('.nav-group[data-group="intrinsic"]');
      if (groupEl) groupEl.classList.remove('collapsed');
    }
  }

  // ---------------- Pages ----------------

  function pageHome() {
    return `
      <div class="home-hero">
        <h1>${t('homeTitle')}</h1>
        <p>${t('homeIntro', SKILLS.length, COMMANDS.length)}</p>
      </div>

      <div class="stat-row">
        <a class="stat-box" href="#/skills"><div class="num">${SKILLS.length}</div><div class="lbl">${t('statUnique')}</div></a>
        <a class="stat-box" href="#/skills"><div class="num">${PANTHEON_SKILLS.length}</div><div class="lbl">${t('statPantheon')}</div></a>
        <a class="stat-box" href="#/skills"><div class="num">${OTHER_SKILLS.length}</div><div class="lbl">${t('statOther')}</div></a>
        <a class="stat-box" href="#/intrinsics"><div class="num">${INTRINSIC_SKILLS.length}</div><div class="lbl">${t('statIntrinsic')}</div></a>
        <a class="stat-box" href="#/commands"><div class="num">${COMMANDS.length}</div><div class="lbl">${t('statCommands')}</div></a>
      </div>

      <h2 class="section-heading">${t('featuredSkills')}</h2>
      <div class="entry-grid">
        ${shuffle(SKILLS).slice(0, 6).map(skillCardHtml).join('')}
      </div>

      <h2 class="section-heading">${t('navIntrinsic')}</h2>
      <div class="entry-grid">
        ${shuffle(INTRINSIC_SKILLS).slice(0, 6).map(intrinsicCardHtml).join('')}
      </div>

      <h2 class="section-heading">${t('sectionCommands')}</h2>
      <div class="entry-grid">
        ${COMMANDS.slice(0, 6).map(commandCardHtml).join('')}
      </div>
    `;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function skillCardHtml(s) {
    return `
      <a class="entry-card" href="#/skill/${s.id}" style="--card-accent:${s.accent}">
        <h4>${esc(s.name)}</h4>
        <p>${esc(loc(s.excerpt))}</p>
      </a>
    `;
  }

  function commandCardHtml(c) {
    return `
      <a class="entry-card" href="#/command/${c.id}">
        <h4><code>${esc(c.root)}</code></h4>
        <p>${esc(loc(c.summary))}</p>
      </a>
    `;
  }

  function intrinsicCardHtml(s) {
    return `
      <a class="entry-card" href="#/intrinsic/${s.id}" style="--card-accent:${s.accent}">
        <h4>${esc(s.name)}</h4>
        ${s.race ? `<div class="evo">${esc(loc(s.race))}</div>` : ''}
        <p>${esc(loc(s.excerpt))}</p>
      </a>
    `;
  }

  function pageSkillList() {
    return `
      <div class="crumbs"><a href="#/">${t('crumbsHome')}</a> / ${t('crumbsSkills')}</div>
      <h1 class="page-title">${t('skillsPageTitle')}</h1>
      <p class="page-lede">${t('skillsPageLede', SKILLS.length)}</p>

      <h2 class="section-heading">${t('navPantheon')} <span class="badge badge-pantheon">${PANTHEON_SKILLS.length}</span></h2>
      <p class="page-lede">${t('pantheonLede')}</p>
      <div class="entry-grid">${PANTHEON_SKILLS.map(skillCardHtml).join('')}</div>

      <h2 class="section-heading">${t('navOther')} <span class="badge badge-named">${OTHER_SKILLS.length}</span></h2>
      <p class="page-lede">${t('otherLede')}</p>
      <div class="entry-grid">${OTHER_SKILLS.map(skillCardHtml).join('')}</div>
    `;
  }

  function pageSkillDetail(id) {
    const s = skillById(id);
    if (!s) return pageNotFound('skill');
    const groupLabel = s.group === 'pantheon' ? t('navPantheon') : t('navOther');
    const groupBadge = s.group === 'pantheon' ? 'badge-pantheon' : 'badge-named';
    const siblings = s.group === 'pantheon' ? PANTHEON_SKILLS : OTHER_SKILLS;
    const idx = siblings.findIndex(x => x.id === s.id);
    const prev = siblings[(idx - 1 + siblings.length) % siblings.length];
    const next = siblings[(idx + 1) % siblings.length];

    return `
      <div class="crumbs"><a href="#/">${t('crumbsHome')}</a> / <a href="#/skills">${t('crumbsSkills')}</a> / ${esc(s.name)}</div>
      <h1 class="page-title" style="color:${s.accent}">${esc(s.name)} <span class="badge ${groupBadge}">${groupLabel}</span></h1>
      ${s.evolution ? `<p class="page-lede">${esc(loc(s.evolution))}</p>` : ''}

      <div class="page-layout">
        <div>
          <div class="desc-block">${loc(s.descHtml)}</div>
        </div>
        <div>
          <div class="infobox">
            <div class="infobox-header" style="color:${s.accent}">${esc(s.name)}</div>
            <div class="infobox-row"><span class="k">${t('infoType')}</span><span class="v">${t('infoTypeVal')}</span></div>
            <div class="infobox-row"><span class="k">${t('infoCategory')}</span><span class="v">${groupLabel}</span></div>
            <div class="infobox-row"><span class="k">${t('infoObtained')}</span><span class="v">${t('infoObtainedVal')}</span></div>
            ${s.evolution ? `<div class="infobox-row"><span class="k">${t('infoEvolves')}</span><span class="v">${esc(loc(s.evolution).replace(/^Evolves into /, ''))}</span></div>` : ''}
          </div>
        </div>
      </div>

      <div class="prev-next">
        <a href="#/skill/${prev.id}"><span class="dir">← ${t('prev')}</span>${esc(prev.name)}</a>
        <a href="#/skill/${next.id}" style="text-align:right"><span class="dir">${t('next')} →</span>${esc(next.name)}</a>
      </div>
    `;
  }

  function pageIntrinsicList() {
    return `
      <div class="crumbs"><a href="#/">${t('crumbsHome')}</a> / ${t('crumbsIntrinsic')}</div>
      <h1 class="page-title">${t('intrinsicsPageTitle')}</h1>
      <p class="page-lede">${t('intrinsicsPageLede', INTRINSIC_SKILLS.length)}</p>
      <div class="entry-grid">${INTRINSIC_SKILLS.map(intrinsicCardHtml).join('')}</div>
    `;
  }

  function pageIntrinsicDetail(id) {
    const s = intrinsicById(id);
    if (!s) return pageNotFound('skill');
    const idx = INTRINSIC_SKILLS.findIndex(x => x.id === s.id);
    const prev = INTRINSIC_SKILLS[(idx - 1 + INTRINSIC_SKILLS.length) % INTRINSIC_SKILLS.length];
    const next = INTRINSIC_SKILLS[(idx + 1) % INTRINSIC_SKILLS.length];

    return `
      <div class="crumbs"><a href="#/">${t('crumbsHome')}</a> / <a href="#/intrinsics">${t('crumbsIntrinsic')}</a> / ${esc(s.name)}</div>
      <h1 class="page-title" style="color:${s.accent}">${esc(s.name)} <span class="badge badge-intrinsic">${t('infoTypeValIntrinsic')}</span></h1>
      ${s.race ? `<p class="page-lede">${esc(loc(s.race))}</p>` : ''}

      <div class="page-layout">
        <div>
          <div class="desc-block">${loc(s.descHtml)}</div>
        </div>
        <div>
          <div class="infobox">
            <div class="infobox-header" style="color:${s.accent}">${esc(s.name)}</div>
            <div class="infobox-row"><span class="k">${t('infoType')}</span><span class="v">${t('infoTypeValIntrinsic')}</span></div>
            ${s.race ? `<div class="infobox-row"><span class="k">${t('infoRace')}</span><span class="v">${esc(loc(s.race))}</span></div>` : ''}
            <div class="infobox-row"><span class="k">${t('infoObtained')}</span><span class="v">${t('infoObtainedRaceVal')}</span></div>
          </div>
        </div>
      </div>

      <div class="prev-next">
        <a href="#/intrinsic/${prev.id}"><span class="dir">← ${t('prev')}</span>${esc(prev.name)}</a>
        <a href="#/intrinsic/${next.id}" style="text-align:right"><span class="dir">${t('next')} →</span>${esc(next.name)}</a>
      </div>
    `;
  }

  function pageCommandList() {
    return `
      <div class="crumbs"><a href="#/">${t('crumbsHome')}</a> / ${t('crumbsCommands')}</div>
      <h1 class="page-title">${t('navCommands')}</h1>
      <p class="page-lede">${t('commandsPageLede', COMMANDS.length)}</p>
      <div class="entry-grid">${COMMANDS.map(commandCardHtml).join('')}</div>
    `;
  }

  function pageCommandDetail(id) {
    const c = commandById(id);
    if (!c) return pageNotFound('command');
    const idx = COMMANDS.findIndex(x => x.id === c.id);
    const prev = COMMANDS[(idx - 1 + COMMANDS.length) % COMMANDS.length];
    const next = COMMANDS[(idx + 1) % COMMANDS.length];

    return `
      <div class="crumbs"><a href="#/">${t('crumbsHome')}</a> / <a href="#/commands">${t('crumbsCommands')}</a> / <code>${esc(c.root)}</code></div>
      <h1 class="page-title"><code>${esc(c.root)}</code> <span class="badge ${permBadgeClass(c.permKey)}">${permLabel(c.permKey)}</span></h1>
      <p class="page-lede">${esc(loc(c.summary))}</p>

      <h2 class="section-heading">${t('subcommands')}</h2>
      <table class="sub-table">
        <thead><tr><th>${t('colSyntax')}</th><th>${t('colDesc')}</th></tr></thead>
        <tbody>
          ${c.subs.map(sub => `
            <tr>
              <td><code>${esc(sub.syntax)}</code></td>
              <td class="sub-desc">${esc(loc(sub.desc))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="prev-next">
        <a href="#/command/${prev.id}"><span class="dir">← ${t('prev')}</span><code>${esc(prev.root)}</code></a>
        <a href="#/command/${next.id}" style="text-align:right"><span class="dir">${t('next')} →</span><code>${esc(next.root)}</code></a>
      </div>
    `;
  }

  function pageNotFound(kind) {
    return `<div class="not-found"><h1>404</h1><p>${kind === 'skill' ? t('notFoundSkill') : t('notFoundCommand')}</p><p><a href="#/">${t('backHome')}</a></p></div>`;
  }

  // ---------------- Router ----------------

  function parseRoute() {
    const hash = location.hash.replace(/^#/, '') || '/';
    return hash;
  }

  function render() {
    const route = parseRoute();
    const content = document.getElementById('content');
    let html;

    if (route === '/') html = pageHome();
    else if (route === '/skills') html = pageSkillList();
    else if (route.startsWith('/skill/')) html = pageSkillDetail(decodeURIComponent(route.slice(7)));
    else if (route === '/intrinsics') html = pageIntrinsicList();
    else if (route.startsWith('/intrinsic/')) html = pageIntrinsicDetail(decodeURIComponent(route.slice(11)));
    else if (route === '/commands') html = pageCommandList();
    else if (route.startsWith('/command/')) html = pageCommandDetail(decodeURIComponent(route.slice(9)));
    else html = pageNotFound('skill');

    content.innerHTML = html;
    setActiveNav(route);
    content.scrollTop = 0;
    window.scrollTo(0, 0);
    closeMobileSidebar();
  }

  window.addEventListener('hashchange', render);

  // ---------------- Global search ----------------

  function buildSearchIndex() {
    const idx = [];
    for (const s of SKILLS) {
      idx.push({ kind: t('kindSkill'), label: s.name, route: '/skill/' + s.id, haystack: (s.name + ' ' + allText(s.excerpt)).toLowerCase() });
    }
    for (const s of INTRINSIC_SKILLS) {
      idx.push({ kind: t('navIntrinsic'), label: s.name, route: '/intrinsic/' + s.id, haystack: (s.name + ' ' + allText(s.race) + ' ' + allText(s.excerpt)).toLowerCase() });
    }
    for (const c of COMMANDS) {
      idx.push({
        kind: t('kindCommand'),
        label: c.root,
        route: '/command/' + c.id,
        haystack: (c.root + ' ' + c.summary.es + ' ' + c.summary.en + ' ' + c.subs.map(x => x.syntax + ' ' + x.desc.es + ' ' + x.desc.en).join(' ')).toLowerCase()
      });
    }
    return idx;
  }

  function initSearch() {
    const input = document.getElementById('global-search');
    const resultsBox = document.getElementById('search-results');

    function runSearch(q) {
      q = q.trim().toLowerCase();
      if (!q) { resultsBox.classList.remove('open'); resultsBox.innerHTML = ''; return; }
      const index = buildSearchIndex();
      const matches = index.filter(e => e.haystack.includes(q)).slice(0, 20);
      if (!matches.length) {
        resultsBox.innerHTML = `<div class="sr-empty">${t('searchEmpty')}</div>`;
      } else {
        resultsBox.innerHTML = matches.map(m =>
          `<a href="#${m.route}"><span class="sr-kind">${m.kind}</span>${esc(m.label)}</a>`
        ).join('');
      }
      resultsBox.classList.add('open');
    }

    input.addEventListener('input', () => runSearch(input.value));
    input.addEventListener('focus', () => { if (input.value.trim()) resultsBox.classList.add('open'); });
    document.addEventListener('click', (e) => {
      if (!resultsBox.contains(e.target) && e.target !== input) resultsBox.classList.remove('open');
    });
    resultsBox.addEventListener('click', () => { resultsBox.classList.remove('open'); input.value = ''; });
  }

  // ---------------- Mobile sidebar ----------------

  function closeMobileSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
  }

  function initMobileToggle() {
    document.getElementById('menu-toggle').addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('open');
    });
  }

  // ---------------- Language switch ----------------

  function initLangSwitch() {
    const sel = document.getElementById('lang-select');
    sel.innerHTML = LANG_META.map(l => `<option value="${l.code}">${esc(l.name)}</option>`).join('');
    sel.value = lang;
    sel.addEventListener('change', () => setLang(sel.value));
  }

  // ---------------- Init ----------------

  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.has(lang) ? 'rtl' : 'ltr';
  initLangSwitch();
  buildSidebar();
  initSearch();
  initMobileToggle();
  render();
})();
