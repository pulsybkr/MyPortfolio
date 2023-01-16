import data from '../../fichier.json'
import { useRef, useEffect, useState } from 'react';
import styles from '../../styles/Project.module.css'
import React, { Component } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useRouter } from 'next/router'
import Header from '../../compoments/header';

export default function Post({ post }){
  console.log(post)
  const router = useRouter()

  useEffect(()=>{
    // aos animation
    AOS.init();
      
  }, [])
  return(
    <>
      <section className={styles.sectionprojet}>
        <Header/>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const posts = data;

  return {
    paths: posts.map((post) => ({ params: { id: post.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = data.find((p) => p.id === parseInt(params.id));

  return {
    props: {
      post,
    },
  };
}