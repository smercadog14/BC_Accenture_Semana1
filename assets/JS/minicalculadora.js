const menu = () => {
  let mun = "";
  let comida = "";

  let dep = prompt(
    "Seleccione un departamento \n bo - bolivar  \n an - antioquia \n cu - cundinamarca \n at - atlantico"
  );

  if (dep !== null) {
    dep = dep.toLowerCase();
    if (
      dep != "bo" &&
      dep != "an" &&
      dep != "cu" &&
      dep != "sa" &&
      dep != "at"
    ) {
      alert("seleccione un departamento");
    } else {
      if (dep == "bo") {
        mun = prompt(
          "Seleccione un municipio de Bolivar \n ca - cartagena \n el - el carmen de bolivar \n tu - turbaco \n sa - san juan nepomuceno"
        );

        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "ca" && dep != "el" && dep != "tu" && dep != "sa") {
            alert("seleccione un municipio");
          } else {
            if (dep == "ca") {
              comida = prompt(
                "Seleccione una comida tipica de cartagena \n ae - arroz con embutido de mi tierra  \n ca - chipirones y almejas en fritada  \n ac - arroz caribe  "
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ae" && comida != "ca" && comida != "ac") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "ae") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/12461935-arroz-con-embutido-de-mi-tierra-cartagena"
                    );
                  }
                  if (comida == "ca") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/5967322-chipirones-y-almejas-en-fritada-con-vino-dorado-de-cartagena"
                    );
                  }
                  if (comida == "ac") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/13860338-arroz-caribe-cartagena-de-la-casa"
                    );
                    //alert("La receta es: \n");
                  }
                }
              } else {
                alert("ingrese plato tipico por favor!");
              }
            }
            if (dep == "el") {
              comida = prompt(
                "Seleccione una comida tipica de el carmen de bolivar  \n pr - papa rellena \n ch - chupe de pollo \n pa - papilla de verdura"
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "pr" && comida != "ch" && comida != "pa") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "pr") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/6201531-papa-rellena-de-carmen"
                    );
                  }
                  if (comida == "ch") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/869772-chupe-de-pollo-de-carmen-julieta"
                    );
                  }
                  if (comida == "pa") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/13726433-papilla-de-verdura-con-boniato-preferida-de-carmen"
                    );
                  }
                }
              } else {
                alert("ingrese plato tipico por favor!");
              }
            }
            if (dep == "tu") {
              comida = prompt(
                "Seleccione una comida tipica de turbaco \n ca - carimañolas \n ch - chicharrones \n lo - lomo de cerdo"
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ca" && comida != "ch" && comida != "lo") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "ca") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/11974776-carimanolas"
                    );
                  }
                  if (comida == "ch") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/13362815-chicharron-crocantes?ref=search&search_term=chicharrones"
                    );
                  }
                  if (comida == "lo") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/13450694-lomo-de-cerdo-asado-con-arroz-blanco-patacones-y-tiras-de-yuca?ref=search&search_term=yuca"
                    );
                  }
                }
              } else {
                alert("ingrese plato tipico por favor!");
              }
            }
            if (dep == "sa") {
              comida = prompt(
                "Seleccione una comida tipica de san juan nepomuceno\n ag - arroz con gandules \n mo - mofongo \n ch - chenchen"
              );
              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ag" && comida != "mo" && comida != "ch") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "ag") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/14806499-arroz-con-gandules-chicharos"
                    );
                  }
                  if (comida == "mo") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/8586491-mofongo?ref=search&search_term=mofongo"
                    );
                  }
                  if (comida == "ch") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/484335-chenchen?ref=search&search_term=chench%C3%A9n"
                    );
                  }
                }
              } else {
                alert("ingrese plato tipico por favor!");
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
      if (dep == "an") {
        mun = prompt(
          "Seleccione un municipio de Antioquia \n me - medellin  \n sf - santa fe \n je - jericó \n ja - jardin"
        );

        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "me" && dep != "sf" && dep != "je" && dep != "ja") {
            alert("seleccione un municipio");
          } else {
            if (dep == "me") {
              comida = prompt(
                "Seleccione una comida tipica de \n bp - bandeja paisa  \n gm -  guiso de mondongo \n ap - arepa paisa"
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "bp" && comida != "gm" && comida != "ap") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "bp") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/10878020-bandeja-paisa"
                    );
                  }
                  if (comida == "gm") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/11797677-guiso-de-mondongo-%F0%9F%A5%A3%F0%9F%98%8Bpanza-callos"
                    );
                  }
                  if (comida == "ap") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/4612426-arepas-paisas-o-antioquenas"
                    );
                  }
                }
              }
            }
            if (dep == "sf") {
              comida = prompt(
                "Seleccione una comida tipica de \n ma - mazamorra \n mo - morcillas \n fr - fijoles"
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ma" && comida != "mo" && comida != "fr") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "ma") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/14426532-mazamorra-antioquena"
                    );
                  }
                  if (comida == "mo") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/12954674-morcillas-al-horno-con-cebollas"
                    );
                  }
                  if (comida == "fr") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/5386454-frijoles-antioquenos-con-paticas-de-cerdo?ref=search&search_term=frijoles%20antioque%C3%B1os"
                    );
                  }
                }
              }
            }
            if (dep == "je") {
              comida = prompt(
                "Seleccione una comida tipica de \n ro - rosquete de limon \n lo - lomo de cerdo \n pr - papas ralladas"
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ro" && comida != "lo" && comida != "pr") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "ro") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/14663684-rosquetes-de-limon"
                    );
                  }
                  if (comida == "lo") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/11447277-lomo-de-cerdo-a-la-plancha-con-papas-rebozadas-de-cebolla-y-champinones"
                    );
                  }
                  if (comida == "pr") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/11989898-papas-ralladas-a-la-plancha?ref=search&search_term=papa%20plancha"
                    );
                  }
                }
              }
            }
            if (dep == "ja") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
      if (dep == "cu") {
        mun = prompt(
          "Seleccione un municipio de Cundinamarca \n bg - bogota  \n so - soacha \n gi - girardot \n zi - zipaquirá"
        );

        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "bg" && dep != "so" && dep != "gi" && dep != "zi") {
            alert("seleccione un municipio");
          } else {
            if (dep == "bg") {
              comida = prompt(
                "Seleccione una comida tipica de \n vc - viuda de Capaz \n tm - tamal \n fr - fritanga"
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "vc" && comida != "tm" && comida != "fr") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "vc") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/6154188-viudo-de-capaz?ref=search&search_term=viudo%20de%20capaz"
                    );
                  }
                  if (comida == "tm") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/13563688-tamales-de-arroz-y-masa-con-cerdo-y-pollo"
                    );
                  }
                  if (comida == "fr") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/13291990-fritanga"
                    );
                  }
                }
              }
            }
            if (dep == "so") {
              comida = prompt(
                "Seleccione una comida tipica de \n al - almojabanas  \n ga - garullas \n co - copelias"
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "al" && comida != "ga" && comida != "co") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/8474104-almojabanas?ref=search&search_term=almojabanas"
                    );
                  }
                  if (comida == "") {
                    alert(
                      "La receta es: \n https://www.mycolombianrecipes.com/es/garullas-colombianas/"
                    );
                  }
                  if (comida == "") {
                    alert(
                      "La receta es: \n http://www.eltoquecolombiano.com/2015/02/panuchas-o-copelias.html"
                    );
                  }
                }
              }
            }
            if (dep == "gi") {
              comida = prompt(
                "Seleccione una comida tipica de \n ao - almuerzo otoñal \n mp - migas de platano \n ch - chivo guisado"
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "ao" && comida != "mp" && comida != "ch") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "ao") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/6189923-aluerzo-otonal-y-luminoso-aunque-este-bastante-nublado?ref=search&search_term=gallina%20trucha"
                    );
                  }
                  if (comida == "mp") {
                    alert(
                      "La receta es: \n https://www.recetasgratis.net/receta-de-migas-de-platano-con-chicharron-56045.html"
                    );
                  }
                  if (comida == "ch") {
                    alert(
                      "La receta es: \n https://superpola.com/recetas/chivo-guisado/"
                    );
                  }
                }
              }
            }
            if (dep == "zi") {
              comida = prompt(
                "Seleccione una comida tipica de \n aj - ajiaco\n sa - sancocho de gallina \n gu - guarapo"
              );

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "aj" && comida != "sa" && comida != "gu") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "aj") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/12976623-ajiaco-bogotano?ref=search&search_term=ajiaco"
                    );
                  }
                  if (comida == "sa") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/14579385-sancocho-de-gallina?ref=search&search_term=sancocho%20de%20gallina"
                    );
                  }
                  if (comida == "gu") {
                    alert(
                      "La receta es: \n https://cookpad.com/co/recetas/13729867-guarapo-de-pina-bebida-fermentada?ref=search&search_term=Guarapo"
                    );
                  }
                }
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
      if (dep == "sa") {
        mun = prompt(
          "Seleccione un municipio de Santander \n bu - bucaramanga \n ba - barrancabermeja \n pe - el peñon \n sa - sabana de torres"
        );
        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "" && dep != "" && dep != "" && dep != "") {
            alert("seleccione un municipio");
          } else {
            if (dep == "") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
      if (dep == "at") {
        mun = prompt(
          "Seleccione un municipio del Atlantico \n ba - barranquilla \n so - soledad \n ba - baranoa  \n ma - malambo"
        );

        if (mun !== null) {
          mun = mun.toLowerCase();

          if (dep != "" && dep != "" && dep != "" && dep != "") {
            alert("seleccione un municipio");
          } else {
            if (dep == "") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
            if (dep == "") {
              comida = prompt("Seleccione una comida tipica de \n  \n \n ");

              if (comida !== null) {
                comida = comida.toLowerCase();

                if (comida != "" && comida != "" && comida != "") {
                  alert("seleccione una comida");
                } else {
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                  if (comida == "") {
                    alert("La receta es: \n");
                  }
                }
              }
            }
          }
        } else {
          alert("ingrese un municipio por favor!");
        }
      }
    }
  } else {
    alert("no seleccionaste una ciudad");
  }
};
