import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import * as converter from 'xml-js';
import { ArticleFeed } from '../interfaces/article-feed';
import { CourseFeed } from '../interfaces/course-feed';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private http: HttpClient) { }

    getDataBJsonCourse(): Promise <CourseFeed[]> {
        return new Promise((resolve, rejects) => {
            this.http.request('GET', '/assets/data/courses.json').subscribe((items: any) => {
                //Assignation des items dans le fichier json
                items = items.courses;
                console.log(items);
                //Création d'un tableau d'articles à vide
                let courses: CourseFeed[] = []
                //Parcours des items d'articles
                for (const item of items) {
                    //Ajout dans le tableau la clé et la valeur de l'article
                    courses.push({
                        title: item.titre,
                        description: item.intitule,
                        author: item.auteur,
                        infos: item.infos
                    })
                }
                console.log(courses);
                //Si la requête s'est bien déroulé alors envoie des données
                resolve(courses);
                //Si la requête ne s'est pas bien déroulé alors affichage des erreurs
                rejects("Aucunes données n'est reçu !!")
            })
        })
    }

    getDataBJson(): Promise <ArticleFeed[]> {
        return new Promise((resolve, rejects) => {
            this.http.request('GET', '/assets/data/test.json').subscribe((items: any) => {
                //Assignation des items dans le fichier json
                items = items.articles;
                console.log(items);
                //Création d'un tableau d'articles à vide
                let articles: ArticleFeed[] = []
                //Parcours des items d'articles
                for (const item of items) {
                    //Ajout dans le tableau la clé et la valeur de l'article
                    articles.push({
                        category: item.source.name,
                        title: item.title,
                        subTitle: '',
                        pubDate: item.publishedAt,
                        description: item.description,
                        creator: item.author,
                        media: item.urlToImage
                    })
                }
                console.log(articles);
                //Si la requête s'est bien déroulé alors envoie des données
                resolve(articles);
                //Si la requête ne s'est pas bien déroulé alors affichage des erreurs
                rejects("Aucunes données n'est reçu !!")
            })
        })
    }

    requestByUrlTrashTalk(): Promise <ArticleFeed[]> {
        return new Promise((resolve, rejects) => {
            this.http.request('GET', 'https://trashtalk.co/feed/', { responseType: 'text' }).subscribe((data) => {
                try {
                    let articles: ArticleFeed[] = []
                    //Récupération des données sur un site pour parsage des données en json
                    const object = JSON.parse(converter.xml2json(data, { compact: true, spaces: 2 }))
                    //Récupération des noeuds <rss> -> <channel> -> <item>
                    const items = object.rss.channel.item
                    //Création d'une variable de l'item 
                    items.map((article) => {
                        //Récupération de la balise <category> de l'item ainsi que création d'une variable categ
                        let test = article.category.map((categ) => {
                            //Ajout du CDATA de la category dans categ
                            categ = categ._cdata
                            return categ;
                        })
                        //Ajout de la donnée du cdata dans l'article
                        article.category = test
                        return article
                    })
                    //Parcours des items avec ajout dans tableau d'article avec leurs clés et valeurs
                    for (const item of items) {
                        articles.push({
                            category: item.category,
                            title: item.title._text,
                            subTitle: '',
                            pubDate: item.pubDate._text,
                            description: item.description._cdata,
                            creator: item['dc:creator']._cdata
                        })
                    }
                    resolve(articles);
                } catch (err) {
                    rejects(false)
                }
            })
        })
    }
}
