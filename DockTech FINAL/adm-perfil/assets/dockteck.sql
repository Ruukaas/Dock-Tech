create database if not exists dockteck;
use dockteck;

create table if not exists inst_empresa(
	codigo int(11) auto_increment,
    nome varchar(255),
    responsavel varchar(255) ,
    contato varchar(255),
    função enum("instituição", "empresa"),
    primary key (codigo)
);

create table if not exists usuario(
	codigo int(11) auto_increment,
    nome varchar(255),
    email varchar(255),
    função enum("aluno","mentor","administrador") default "aluno",
    github varchar(255),
    `inst_empresa_codigo` int(11),
    primary key (codigo),
    constraint foreign key (`inst_empresa_codigo`) references inst_empresa(`codigo`)
);

create table if not exists squad(
	codigo int(11),
    fase_residencia enum("Kick Off","Rise Up", "Grow Up"),
    `inst_empresa_codigo` int(11),
    constraint foreign key (`inst_empresa_codigo`) references inst_empresa(`codigo`),
    CONSTRAINT pk_CE primary key(codigo,fase_residencia)
);

create table if not exists relação_usuario_squad(
	codigo_squad int(11),
    codigo_aluno int(11),
    fase_residencia enum("Kick Off","Rise Up", "Grow Up"),
    CONSTRAINT pk_CE primary key(codigo_squad,fase_residencia),
	constraint foreign key (`codigo_squad`) references squad(`codigo`),
    constraint foreign key (`codigo_aluno`) references usuario(`codigo`)
);

create table if not exists relação_squad_mentor(
    codigo_squad int(11) ,
    codigo_mentor int(11) ,
    fase_residencia enum("Kick Off","Rise Up", "Grow Up"),
	CONSTRAINT pk_CE primary key(codigo_squad,fase_residencia),
    constraint foreign key (`codigo_squad`) references squad(`codigo`),
    constraint foreign key (`codigo_mentor`) references usuario(`codigo`)
);

create table if not exists notificação(
	codigo int(11) auto_increment,
    titulo varchar(255),
    tipo_notificação enum("Porto","Residência","Pessoal"),
    mensagem varchar(8000),
    primary key (codigo)
);

create table if not exists relação_notificação_squad(
    codigo_notificação int(11),
	codigo_squad int(11),
    fase_residencia enum("Kick Off","Rise Up", "Grow Up"),
    CONSTRAINT pk_CE primary key(codigo_squad,fase_residencia),
	constraint foreign key (`codigo_squad`) references squad(`codigo`),
    constraint foreign key (`codigo_notificação`) references notificação(`codigo`)
);

create table if not exists trilha(
	codigo int(11) auto_increment,
    title varchar(255),
    fases_da_residencia set("Kick Off","Rise Up", "Grow Up"),
    primary key (codigo)
);

create table if not exists module(
	codigo int(11) auto_increment,
    trilha_codigo int(11),
    title varchar(255),
    primary key(codigo),
    constraint foreign key (`trilha_codigo`) references trilha(`codigo`)
);

create table if not exists lesson(
	codigo int(11) auto_increment,
    module_codigo int(11),
    title varchar(255),
    videoType enum ("external","internal"),
    link varchar(255),
    primary key (codigo),
    constraint foreign key (`module_codigo`) references module(`codigo`)
);

create table if not exists relacao_usuario_trilha_module_lesson_minutagem(
	usuario_codigo int(11),
    trilha_codigo int(11),
	module_codigo int(11),
    lesson_codigo int(11),
    minuto time,
	CONSTRAINT pk_CE primary key(usuario_codigo,trilha_codigo,module_codigo,lesson_codigo),
    constraint foreign key (`usuario_codigo`) references usuario(`codigo`),
    constraint foreign key (`trilha_codigo`) references trilha(`codigo`),
    constraint foreign key (`module_codigo`) references module(`codigo`),
    constraint foreign key (`lesson_codigo`) references lesson(`codigo`)
);

create table if not exists relacao_usuario_trilha_module_lesson_concluido(
	usuario_codigo int(11),
    trilha_codigo int(11),
	module_codigo int(11),
    lesson_codigo int(11),
    concluido boolean default false,
	CONSTRAINT pk_CE primary key(usuario_codigo,trilha_codigo,module_codigo,lesson_codigo),
    constraint foreign key (`usuario_codigo`) references usuario(`codigo`),
    constraint foreign key (`trilha_codigo`) references trilha(`codigo`),
    constraint foreign key (`module_codigo`) references module(`codigo`),
    constraint foreign key (`lesson_codigo`) references lesson(`codigo`)
)