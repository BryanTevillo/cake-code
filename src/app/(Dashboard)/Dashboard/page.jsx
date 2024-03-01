"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card } from "flowbite-react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState, useEffect } from "react";
import axios from "axios";

const pasteles = [5000];
const cupcakes = [3000];
const galletas = [4000];
const custom = [3500];
const xLabels = ["Ventas"];
const usuarios = [100, 150];
const xLabels1 = ["Enero", "Febrero"];

export default function dashboard() {
  const [countproducts, setCountProducts] = useState([]);
  const [countcupcakes, setCupcakes] = useState(0);
  const [countgalletas, setGalletas] = useState(0);
  const [countpasteles, setPasteles] = useState(0);
  const [countUser, setCountUser] = useState(0);
  const [countOrder, setCountOrder] = useState(0);

  const solicitudDatos = async () => {
    try {
      const { data } = await axios.get(
        "https://cakecodedeploy.onrender.com/api/v1/ecommerce/products"
      );
      console.log("Datos recuperados:", data); // Verificar los datos recuperados
      setCountProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    solicitudDatos();
  }, []);

  useEffect(() => {
    console.log("Productos actualizados:", countproducts); // Verificar si los productos se están actualizando correctamente
    let countCupcake = 0;
    let countGalleta = 0;
    let countPastel = 0;

    countproducts.forEach((value) => {
      if (value.type === "Cupcake") countCupcake += value.stock;
      if (value.type === "Galletas") countGalleta += value.stock;
      if (value.type === "Pastel") countPastel += value.stock;
    });

    console.log(countCupcake + "son estos los cupcakes");
    setCupcakes(countCupcake);
    setGalletas(countGalleta);
    setPasteles(countPastel);
  }, [countproducts]);

  return (
    <main>
      <h1 className="text-4xl text-bold text-center mt-20 md:text-5xl xl:">
        DASHBOARD
      </h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 md:pl-10">
        <Card className="w-[380px] h-[300px] mt-20">
          <h2 className="text-3xl text-center text-bold">Stock</h2>
          <PieChart
            colors={["#F8AAC6", "#F8D8C8", "#B6DCEF"]}
            series={[
              {
                data: [
                  { id: 1, value: countcupcakes, label: "cupcakes" },
                  { id: 2, value: countgalletas, label: "galletas" },
                  { id: 3, value: countpasteles, label: "pasteles" },
                ],
                cx: 100,
                cy: 100,
              },
            ]}
            width={350}
            height={200}
          />
        </Card>
        <Card className="w-[380px] h-[300px] mt-10 md:mt-20">
          <h2 className="text-3xl text-center text-bold">Ventas</h2>
          <BarChart
            className=""
            colors={["#F8AAC6", "#F8D8C8", "#B6DCEF", "#DCC8ED"]}
            width={350}
            height={250}
            series={[
              { data: pasteles, label: "pasteles", id: "pId" },
              { data: cupcakes, label: "cupcakes", id: "cId" },
              { data: galletas, label: "galletas", id: "gId" },
              { data: custom, label: "customC", id: "customId" },
            ]}
            xAxis={[
              { data: xLabels, scaleType: "band", categoryGapRatio: 0.3 },
            ]}
          />
        </Card>
        <Card className="w-[380px] h-[300px] mt-10 mb-10 md:mt-20 md:col-span-2 md:mb-10">
          <h2 className="text-3xl text-center text-bold">
            Usuarios Registrados
          </h2>
          <BarChart
            className=""
            colors={["#F8AAC6", "#F8D8C8"]}
            width={300}
            height={250}
            series={[
              {
                data: usuarios,
                label: "usuarios registrados",
                id: "usuariosId",
              },
            ]}
            xAxis={[
              { data: xLabels1, scaleType: "band", categoryGapRatio: 0.3 },
            ]}
          />
        </Card>
      </div>
    </main>
  );
}
