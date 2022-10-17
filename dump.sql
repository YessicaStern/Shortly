--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off; 

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    session text NOT NULL,
    "idUser" integer NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "idUser" integer NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(250) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: visitors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.visitors (
    id integer NOT NULL,
    visit integer DEFAULT 0,
    "idUrl" integer NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: visitors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.visitors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: visitors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.visitors_id_seq OWNED BY public.visitors.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: visitors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visitors ALTER COLUMN id SET DEFAULT nextval('public.visitors_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, '$2b$13$cgic43t96hkiOOR.R7QIX.Z8xyz.NWPaimv8gt8ODlY1D88yh/wbu', 1, '2022-10-17 12:07:09.091618');
INSERT INTO public.sessions VALUES (2, '$2b$13$k28qgSTGMDI4S.kVBBetPegwAkVZUwjDROsQwhME5Q.4gWmO.lBsO', 1, '2022-10-17 12:10:01.447375');
INSERT INTO public.sessions VALUES (3, '$2b$13$UfqxTWAPwEMSdTGZENRqi.k0UzLETUW3EPZoIEGmV3nQ6oZ/beNsK', 1, '2022-10-17 12:11:29.263416');
INSERT INTO public.sessions VALUES (4, '$2b$13$0HNvCLqjaf./12cjWHpQce4TFSIONA/qHDAEjmehvCy2qb4LLtOKy', 1, '2022-10-17 12:12:40.909963');
INSERT INTO public.sessions VALUES (5, '$2b$13$w9wFsrD3L/QUxPnW02luqupysronf2LY6AS8uAWT7iGM/yh98f6oK', 1, '2022-10-17 12:13:05.581587');
INSERT INTO public.sessions VALUES (6, '$2b$13$hpIM0wGaYBSsbaDnZE1HguXGcL2FIpJNCjpiyzPckvUPvatSPx3g6', 2, '2022-10-17 12:37:26.388871');
INSERT INTO public.sessions VALUES (7, '$2b$13$IDTqGvXSvtYTfKAleH0ZXOMt/U4Zto1WjLzGe4JfSufWAL1Q84s2S', 2, '2022-10-17 12:37:35.428528');
INSERT INTO public.sessions VALUES (8, '$2b$13$Ei9oS6cz5PRnpuNMM/3mxO5bmUTpogXMsJBCMivEHd9AdCg4OPAzW', 2, '2022-10-17 12:38:42.344912');
INSERT INTO public.sessions VALUES (9, '$2b$13$E/hL4c2Gt141b6ozYx2cM.lCZ5hPqaZVLzhgnyv2JQnq1/b1Qn3vy', 1, '2022-10-17 12:38:51.930216');
INSERT INTO public.sessions VALUES (10, '$2b$13$gtnQGwEwSqmzUab2zTqCXu9b.g3sJUfeUGNNxXDH95jtqv7MG5/16', 2, '2022-10-17 12:41:45.411796');
INSERT INTO public.sessions VALUES (11, '$2b$13$BpW2te7qNf0cQ2gWXOiEROotSEnqTn8gmzZhuv3Qc2TvQrpdfY3oa', 2, '2022-10-17 12:41:54.700081');
INSERT INTO public.sessions VALUES (12, '$2b$13$VNV49Eb101rXebXdtdeAbuZCvxwFRNUI.cNV93CiARvXnXQX80tl.', 1, '2022-10-17 12:42:47.547924');
INSERT INTO public.sessions VALUES (13, '$2b$13$VQg93NmUgMieVXuhvqjvDeRdPwsMkCGxhk1YH4pMc1eNSnZaG2fT.', 3, '2022-10-17 12:45:22.0603');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'https://www.google.com', 'teX5-iBgE73XjxsgfVh-i', 1, '2022-10-17 12:36:15.57671');
INSERT INTO public.urls VALUES (2, 'https://www.driven.com.br', 'Q3ERJnMan2d1UcrIp5P_H', 1, '2022-10-17 12:36:30.236828');
INSERT INTO public.urls VALUES (4, 'https://www.epochconverter.com/', 'Fp5Klc2KeEs3V_jQGrTmj', 2, '2022-10-17 12:38:17.215983');
INSERT INTO public.urls VALUES (5, 'https://github.com/', 'U3rAyPJ2c94DR2WyjRNvx', 3, '2022-10-17 12:46:07.622251');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Sakura Calva', 'sakura@calva.com', '$2b$13$vI9TNDKOuhpNaGRMq5SqR.UXCi3vLNC/H4HiCbH.rM4gjImUbEW7K', '2022-10-17 12:07:04.473019');
INSERT INTO public.users VALUES (2, 'Aninha', 'ana@gmail.com', '$2b$13$6sbDp7NELc.RHgxqzuWI.e8TTk8MdyFoTLlOKa32C4QipuPtNFnuW', '2022-10-17 12:37:18.90351');
INSERT INTO public.users VALUES (3, 'alguém ai', 'alguem@ai.com', '$2b$13$xe8Q4gEObFUtKJOjWBzZEevTioRX2GbpwxBMLrfmj.GztiQryw9oa', '2022-10-17 12:45:17.809131');


--
-- Data for Name: visitors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.visitors VALUES (2, 0, 2, '2022-10-17 12:36:30.242699');
INSERT INTO public.visitors VALUES (3, 0, 3, '2022-10-17 12:38:01.603294');
INSERT INTO public.visitors VALUES (4, 3, 4, '2022-10-17 12:38:17.221351');
INSERT INTO public.visitors VALUES (1, 2, 1, '2022-10-17 12:36:15.584453');
INSERT INTO public.visitors VALUES (5, 5, 5, '2022-10-17 12:46:07.628319');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 13, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: visitors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.visitors_id_seq', 5, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: visitors visitors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visitors
    ADD CONSTRAINT visitors_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

