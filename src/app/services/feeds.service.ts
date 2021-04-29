import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CourseFeed } from '../interfaces/course-feed';

@Injectable({
    providedIn: 'root'
})
export class FeedsService {

    constructor(private http: HttpClient) { }

    getDataBJsonCourse(): Promise<CourseFeed[]> {
        return new Promise((resolve, rejects) => {
            //Lecture du fichier Json
            this.http.request('GET', '/assets/data/courses.json').subscribe((cours: any) => {
                //Assignation des cours dans le fichier json
                cours = cours.courses;
                //Création d'un tableau de type interface CourseFeed à vide
                let courses: CourseFeed[] = []
                //Parcours des cours des cours
                for (const cour of cours) {
                    //Ajout dans le tableau la clé et la valeur du cours
                    courses.push({
                        id: cour.id,
                        category: cour.categorie,
                        title: cour.titre,
                        description: cour.intitule,
                        author: cour.auteur,
                        infos: cour.infos,
                        content: cour.content
                    })
                }
                //Si la requête s'est bien déroulé alors envoie des données
                resolve(courses);
                //Si la requête a échoué
                rejects("Aucunes données n'est reçu !!")
            })
        })
    }

    /* requestByUrlTrashTalk(): Promise<ArticleFeed[]> {
        return new Promise((resolve, rejects) => {
            this.http.request('GET', 'https://trashtalk.co/feed/', { responseType: 'text' }).subscribe((data) => {
                try {
                    let articles: ArticleFeed[] = []
                    //Récupération des données pour parsage des données en json
                    const object = JSON.parse(converter.xml2json(data, { compact: true, spaces: 2 }))
                    //Récupération des noeuds <rss> -> <channel> -> <cour>
                    const cours = object.rss.channel.cour
                    //Création d'une variable de l'cour 
                    cours.map((article) => {
                        //Récupération de la balise <category> de l'cour ainsi que création d'une variable categ
                        let test = article.category.map((categ) => {
                            //Ajout du CDATA de la category dans categ
                            categ = categ._cdata
                            return categ;
                        })
                        //Ajout de la donnée du cdata dans l'article
                        article.category = test
                        return article
                    })
                    //Parcours des cours avec ajout dans tableau d'article avec leurs clés et valeurs
                    for (const cour of cours) {
                        articles.push({
                            category: cour.category,
                            title: cour.title._text,
                            subTitle: '',
                            pubDate: cour.pubDate._text,
                            description: cour.description._cdata,
                            creator: cour['dc:creator']._cdata
                        })
                    }
                    resolve(articles);
                } catch (err) {
                    rejects(false)
                }
            })
        })
    } */
}
