
import { Injectable } from '@angular/core';

export interface Product{
  id:number;
  nombre:string;
  descripcion:string;
  precio:number;
  imagen:string;

}

@Injectable({
  providedIn: 'root'
})


export class Products{
  private products:Product[]=[
  {
    id:1,
    nombre:'pablo quiere a garu',
    descripcion:'hola bebe',
    precio:18900,
    imagen:'/img/pablo.jpg'
  },
  {
    id:2,
    nombre:'toni quiere a garu',
    descripcion:'hola bebe',
    precio:20000,
    imagen:'/img/toni.jpg'
  },
  {
    id:3,
    nombre:'yenicua quiere a garu',
    descripcion:'hola bebe',
    precio:100000,
    imagen:'/img/yenicua.jpg'
  },
  {
    id:4,
    nombre:'cayu quiere a garu',
    descripcion:'hola bebe',
    precio:50000,
    imagen:'/img/cayu.jpg'
  },
  {
    id:5,
    nombre:'dory quiere a garu',
    descripcion:'hola bebe',
    precio:35600,
    imagen:'/img/dory.jpg'
  },
  {
    id:6,
    nombre:'tigger quiere a garu',
    descripcion:'hola bebe',
    precio:48200,
    imagen:'/img/tigger.jpg'
  },
  {
    id:7,
    nombre:'pickachu quiere a garu',
    descripcion:'hola bebe',
    precio:14500,
    imagen:'/img/pickachu.jpg'
  },
  {
    id:8,
    nombre:'ladybook quiere a garu',
    descripcion:'hola bebe',
    precio:19700,
    imagen:'/img/ladybook.jpg'
  }
  
 
]
 constructor(){}
    getProducts():Product[]{
      return this.products;
    }
  
}
