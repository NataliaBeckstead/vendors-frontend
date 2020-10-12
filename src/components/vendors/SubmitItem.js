import React from "react";
import Navbar from "./Navbar";

function SubmitItem() {

  return (
    <div>
        <Navbar />
        <p>Submit Item</p>
        <form>
          <label htmlFor="distributor">Distributor
            <select name="distributor" id="distributor">
              <option value="UNFI West - MORENO VALLEY">UNFI West - MORENO VALLEY</option>
              <option value="TONY'S FINE FOODS (Reed DC)">TONY'S FINE FOODS (Reed DC)</option>
              <option value="UNFI WELLNESS (Gilroy DC)">UNFI WELLNESS (Gilroy DC)</option>
            </select>
          </label>
          <label htmlFor="active">ACTIVE IN DC?
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label htmlFor="code">UNFI or TONY'S ITEM CODE
            <input type="number" id="code" min="00000" max="999999" ></input>
          </label>
          <label htmlFor="upc">RETAIL UNIT UPC (11 Digits Only)
            <input type="number" id="upc" min="00000000000" max="99999999999"></input>
          </label>
          <label htmlFor="brand">BRAND
            <input type="text" id="brand" ></input>
          </label>
          <label htmlFor="description">DESCRIPTION
            <input type="text" id="description" ></input>
          </label>
          <label htmlFor="packSize">PACK SIZE
            <input type="number" id="packSize" ></input>
          </label>
          <label htmlFor="unitSize">UNIT SIZE
            <input type="number" id="unitSize" ></input>
          </label>
          <label htmlFor="uom">UOM
            <select name="uom" id="uom">
              <option value="OZ">OZ</option>
              <option value="CT">CT</option>
              <option value="EA">EA</option>
              <option value="LB">LB</option>
              <option value="CAP">CAP</option>
              <option value="CHEW">CHEW</option>
              <option value="GAL">GAL</option>
              <option value="GR">GR</option>
              <option value="LTR">LTR</option>
              <option value="ML">ML</option>
              <option value="PACK">PACK</option>
              <option value="PAIR">PAIR</option>
              <option value="PKT">PKT</option>
              <option value="SGEL">SGEL</option>
              <option value="TAB">TAB</option>
            </select>
          </label>
          <label htmlFor="height">HEIGHT (in.)
            <input type="number" id="height" step="0.01"></input>
          </label>
          <label htmlFor="width">WIDTH (in.)
            <input type="number" id="width" step="0.01"></input>
          </label>
          <label htmlFor="depth">DEPTH (in.)
            <input type="number" id="depth" step="0.01"></input>
          </label>
          <label htmlFor="rank">RANK
            <input type="number" id="rank" ></input>
          </label>
          <label htmlFor="caseCost">ESTIMATED WHOLESALE CASE COST
            <input type="number" id="caseCost" step="0.01"></input>
          </label>
          <label htmlFor="unitCost">UNIT COST
            <input type="number" id="unitCost" step="0.01"></input>
          </label>
          <label htmlFor="department">HARMONS DEPARTMENT & CATEGORY
            <select name="department" id="department">
              <option value="DAIRY_COTTAGE CHEESE/SOUR CREAM/BUTTER/MARGARINE">DAIRY_COTTAGE CHEESE/SOUR CREAM/BUTTER/MARGARINE</option>
              <option value="DAIRY_CREAM CHEESE">DAIRY_CREAM CHEESE</option>
              <option value="DAIRY_CREAMERS">DAIRY_CREAMERS</option>
              <option value="DAIRY_EGGS">DAIRY_EGGS</option>
              <option value="DAIRY_KEFIR">DAIRY_KEFIR</option>
              <option value="DAIRY_MILK">DAIRY_MILK</option>
              <option value="DAIRY_MILK ALTERNATIVES">DAIRY_MILK ALTERNATIVES</option>
              <option value="DAIRY_RICOTTA CHEESE">DAIRY_RICOTTA CHEESE</option>
              <option value="DAIRY_WHIPPING CREAM/HALF'N HALF">DAIRY_WHIPPING CREAM/HALF'N HALF</option>
              <option value="DAIRY_YOGURT">DAIRY_YOGURT</option>
              <option value="FROZEN_BREAD/NON BREAD/ROLLS/TORTILLAS">FROZEN_BREAD/NON BREAD/ROLLS/TORTILLAS</option>
              <option value="FROZEN_BREAKFAST WAFFLES BURRITOS ENTREES">FROZEN_BREAKFAST WAFFLES BURRITOS ENTREES</option>
              <option value="FROZEN_ICE CREAM NOVELTIES">FROZEN_ICE CREAM NOVELTIES</option>
              <option value="FROZEN_ICE CREAM PINTS">FROZEN_ICE CREAM PINTS</option>
              <option value="FROZEN_ICE CREAM TUBS">FROZEN_ICE CREAM TUBS</option>
              <option value="GROCERY_BREAD">GROCERY_BREAD</option>
              <option value="GROCERY_CANDY- PREMIUM">GROCERY_CANDY- PREMIUM</option>
              <option value="GROCERY_CANDY-BAGGED">GROCERY_CANDY-BAGGED</option>
              <option value="GROCERY_CANDY-PEGGED">GROCERY_CANDY-PEGGED</option>
              <option value="GROCERY_CANDY-SINGLE SERVE">GROCERY_CANDY-SINGLE SERVE</option>
              <option value="GROCERY_CEREAL">GROCERY_CEREAL</option>
              <option value="GROCERY_CEREAL- HOT">GROCERY_CEREAL- HOT</option>
              <option value="GROCERY_CEREAL-BAGGED">GROCERY_CEREAL-BAGGED</option>
              <option value="GROCERY_CHECK STAND">GROCERY_CHECK STAND</option>
              <option value="GROCERY_CHEX MIX/RICE CAKES/HEALTHY SNACKS/SALTY SNACKS">GROCERY_CHEX MIX/RICE CAKES/HEALTHY SNACKS/SALTY SNACKS</option>
              <option value="GROCERY_CHIPS">GROCERY_CHIPS</option>
              <option value="GROCERY_COLD BEVERAGE">GROCERY_COLD BEVERAGE</option>
              <option value="GROCERY_COOKIES">GROCERY_COOKIES</option>
              <option value="GROCERY_CRACKERS">GROCERY_CRACKERS</option>
              <option value="GROCERY_DRIED FRUIT">GROCERY_DRIED FRUIT</option>
              <option value="GROCERY_EATING NUTS/SEEDS">GROCERY_EATING NUTS/SEEDS</option>
              <option value="GROCERY_GRANOLA">GROCERY_GRANOLA</option>
              <option value="GROCERY_MAC & CHEESE">GROCERY_MAC & CHEESE</option>
              <option value="GROCERY_MULTIPACK GRANOLA BARS">GROCERY_MULTIPACK GRANOLA BARS</option>
              <option value="GROCERY_NUTRITION BARS">GROCERY_NUTRITION BARS</option>
              <option value="GROCERY_NUTRITIONAL BAR COOLER">GROCERY_NUTRITIONAL BAR COOLER</option>
              <option value="GROCERY_PACKAGED DINNERS">GROCERY_PACKAGED DINNERS</option>
              <option value="GROCERY_POPCORN BAGGED">GROCERY_POPCORN BAGGED</option>
              <option value="GROCERY_PRETZELS">GROCERY_PRETZELS</option>
              <option value="GROCERY_PRINGLES">GROCERY_PRINGLES</option>
              <option value="GROCERY_SNACK CAKES">GROCERY_SNACK CAKES</option>
              <option value="HEALTH/BEAUTY_BABY ACCESSORIES">HEALTH/BEAUTY_BABY ACCESSORIES</option>
              <option value="HEALTH/BEAUTY_BABY CREAM/POWDER">HEALTH/BEAUTY_BABY CREAM/POWDER</option>
              <option value="HEALTH/BEAUTY_BABY FOOD - PERISHABLE">HEALTH/BEAUTY_BABY FOOD - PERISHABLE</option>
              <option value="HEALTH/BEAUTY_BABY FOOD - POUCHES/JARS">HEALTH/BEAUTY_BABY FOOD - POUCHES/JARS</option>
              <option value="HEALTH/BEAUTY_BABY FOOD-CEREAL SNACKS (GRADUATES)">HEALTH/BEAUTY_BABY FOOD-CEREAL SNACKS (GRADUATES)</option>
              <option value="HEALTH/BEAUTY_BABY FOOD-FORMULA">HEALTH/BEAUTY_BABY FOOD-FORMULA</option>
              <option value="HEALTH/BEAUTY_BABY TOILETRIES">HEALTH/BEAUTY_BABY TOILETRIES</option>
              <option value="VITAMINS_HARMONS VITAMINS">VITAMINS_HARMONS VITAMINS</option>
              <option value="VITAMINS_PROTEIN POWDERS">VITAMINS_PROTEIN POWDERS</option>
              <option value="VITAMINS_WOMEN'S/KID'S VITAMINS">VITAMINS_WOMEN'S/KID'S VITAMINS</option>
              <option value="WALL DELI_BACON">WALL DELI_BACON</option>
              <option value="WALL DELI_CHEESE: DAIRY">WALL DELI_CHEESE: DAIRY</option>
              <option value="WALL DELI_CHEESE: PLANT BASED">WALL DELI_CHEESE: PLANT BASED</option>
              <option value="WALL DELI_FRESH SAUSAGE ROPES_ROLLS">WALL DELI_FRESH SAUSAGE ROPES_ROLLS</option>
              <option value="WALL DELI_HOT DOGS">WALL DELI_HOT DOGS</option>
              <option value="WALL DELI_LUNCHMEATS: STRIPS_CUTS_SLICED_ PEGABLE">WALL DELI_LUNCHMEATS: STRIPS_CUTS_SLICED_ PEGABLE</option>
              <option value="WALL DELI_MEAT: PLANT BASED">WALL DELI_MEAT: PLANT BASED</option>
              <option value="WALL DELI_PEPPERONI_SALAMI_CAND BACON_SUMMER SAUSAGE">WALL DELI_PEPPERONI_SALAMI_CAND BACON_SUMMER SAUSAGE</option>
              <option value="WALL DELI_TORTILLAS (Chill)">WALL DELI_TORTILLAS (Chill)</option>
              <option value="CHRISTMAS/HALLOWEEN/SEASONAL">CHRISTMAS/HALLOWEEN/SEASONAL</option>
              <option value="BULK_ALL BULK/SPICES/FRESH PACK">BULK_ALL BULK/SPICES/FRESH PACK</option>
              <option value="DAIRY_CHILLED JUICE/COFFEE/TEA">DAIRY_CHILLED JUICE/COFFEE/TEA</option>
              <option value="DAIRY_DOUGH/BISCUITS/COOKIES">DAIRY_DOUGH/BISCUITS/COOKIES</option>
              <option value="FROZEN_CHICKEN">FROZEN_CHICKEN</option>
              <option value="FROZEN_CORN DOGS">FROZEN_CORN DOGS</option>
              <option value="FROZEN_DESSERTS">FROZEN_DESSERTS</option>
              <option value="FROZEN_ENTRÉE - ASIAN">FROZEN_ENTRÉE - ASIAN</option>
              <option value="FROZEN_ENTREES - DINNER">FROZEN_ENTREES - DINNER</option>
              <option value="FROZEN_ENTREES - FAMILY">FROZEN_ENTREES - FAMILY</option>
              <option value="FROZEN_FISH_SEAFOOD">FROZEN_FISH_SEAFOOD</option>
              <option value="FROZEN_FROZEN BURRITOS_TAQUITOS">FROZEN_FROZEN BURRITOS_TAQUITOS</option>
              <option value="FROZEN_FROZEN JUICE">FROZEN_FROZEN JUICE</option>
              <option value="FROZEN_FROZEN MEATS:  MEATBALLS_MEAL KITS">FROZEN_FROZEN MEATS:  MEATBALLS_MEAL KITS</option>
              <option value="FROZEN_FROZEN PASTA & SAUCE">FROZEN_FROZEN PASTA & SAUCE</option>
              <option value="FROZEN_FRUIT">FROZEN_FRUIT</option>
              <option value="FROZEN_FRZN PROCESSED MEAT_POULTRY">FROZEN_FRZN PROCESSED MEAT_POULTRY</option>
              <option value="FROZEN_HOT POCKETS">FROZEN_HOT POCKETS</option>
              <option value="FROZEN_MEAT">FROZEN_MEAT</option>
              <option value="FROZEN_MEATLESS">FROZEN_MEATLESS</option>
              <option value="FROZEN_PIZZA">FROZEN_PIZZA</option>
              <option value="FROZEN_POT PIES">FROZEN_POT PIES</option>
              <option value="FROZEN_POTATOES">FROZEN_POTATOES</option>
              <option value="FROZEN_SNACKS">FROZEN_SNACKS</option>
              <option value="FROZEN_VEGETABLES">FROZEN_VEGETABLES</option>
              <option value="FROZEN_WHIPPED TOPPING">FROZEN_WHIPPED TOPPING</option>
              <option value="GM_BATTERIES">GM_BATTERIES</option>
              <option value="GM_CHARCOAL/FIRELOGS">GM_CHARCOAL/FIRELOGS</option>
              <option value="GM_COOKWARE / KITHCHEN GADGETS">GM_COOKWARE / KITHCHEN GADGETS</option>
              <option value="GM_HARDWARE">GM_HARDWARE</option>
              <option value="GM_HYDRATION">GM_HYDRATION</option>
              <option value="GM_LIGHTING">GM_LIGHTING</option>
              <option value="GM_MOPS / BROOMS">GM_MOPS / BROOMS</option>
              <option value="GM_PEST CONTROL">GM_PEST CONTROL</option>
              <option value="GM_PLASTIC STORAGE">GM_PLASTIC STORAGE</option>
              <option value="GM_SCHOOL / OFFICE SUPPLIES">GM_SCHOOL / OFFICE SUPPLIES</option>
              <option value="GM_SPONGE SET">GM_SPONGE SET</option>
              <option value="GM_TOYS">GM_TOYS</option>
              <option value="GROCERY_ASEPTIC MILK">GROCERY_ASEPTIC MILK</option>
              <option value="GROCERY_ASIAN">GROCERY_ASIAN</option>
              <option value="GROCERY_BAKING CHIPS/MARSHMALLOW">GROCERY_BAKING CHIPS/MARSHMALLOW</option>
              <option value="GROCERY_BAKING NUTS">GROCERY_BAKING NUTS</option>
              <option value="GROCERY_BBQ">GROCERY_BBQ</option>
              <option value="GROCERY_BEANS- CANNED">GROCERY_BEANS- CANNED</option>
              <option value="GROCERY_BEANS- DRY">GROCERY_BEANS- DRY</option>
              <option value="GROCERY_BROTH">GROCERY_BROTH</option>
              <option value="GROCERY_CAKE MIX">GROCERY_CAKE MIX</option>
              <option value="GROCERY_CHILI">GROCERY_CHILI</option>
              <option value="GROCERY_COATINGS">GROCERY_COATINGS</option>
              <option value="GROCERY_COCOA AND MILK FLAVORING">GROCERY_COCOA AND MILK FLAVORING</option>
              <option value="GROCERY_COFFEE">GROCERY_COFFEE</option>
              <option value="GROCERY_COFFEE- K-CUPS">GROCERY_COFFEE- K-CUPS</option>
              <option value="GROCERY_COFFEE-CREAMERS/FILTERS">GROCERY_COFFEE-CREAMERS/FILTERS</option>
              <option value="GROCERY_CONDENSED/POWDERED MILK">GROCERY_CONDENSED/POWDERED MILK</option>
              <option value="GROCERY_COOKING SAUCE: MEAL SOLUTIONS">GROCERY_COOKING SAUCE: MEAL SOLUTIONS</option>
              <option value="GROCERY_DRINK MIXERS">GROCERY_DRINK MIXERS</option>
              <option value="GROCERY_FISH AND MEAT">GROCERY_FISH AND MEAT</option>
              <option value="GROCERY_FLAVORED RICE">GROCERY_FLAVORED RICE</option>
              <option value="GROCERY_FRUIT SNACKS">GROCERY_FRUIT SNACKS</option>
              <option value="GROCERY_FRUIT-CANNED/GLASS">GROCERY_FRUIT-CANNED/GLASS</option>
              <option value="GROCERY_GRAINS">GROCERY_GRAINS</option>
              <option value="GROCERY_HISPANIC">GROCERY_HISPANIC</option>
              <option value="GROCERY_HOT SAUCE">GROCERY_HOT SAUCE</option>
              <option value="GROCERY_INDIAN">GROCERY_INDIAN</option>
              <option value="GROCERY_JELLO">GROCERY_JELLO</option>
              <option value="GROCERY_JERKY">GROCERY_JERKY</option>
              <option value="GROCERY_JUICE- BOTTLED">GROCERY_JUICE- BOTTLED</option>
              <option value="GROCERY_JUICE- MULTIPACK">GROCERY_JUICE- MULTIPACK</option>
              <option value="GROCERY_MUSTARD/KETCHUP">GROCERY_MUSTARD/KETCHUP</option>
              <option value="GROCERY_NUT BUTTERS/ PRESERVES">GROCERY_NUT BUTTERS/ PRESERVES</option>
              <option value="GROCERY_NUTRITIONAL SHAKES">GROCERY_NUTRITIONAL SHAKES</option>
              <option value="GROCERY_OIL/SHORTENING">GROCERY_OIL/SHORTENING</option>
              <option value="GROCERY_OLIVE OIL">GROCERY_OLIVE OIL</option>
              <option value="GROCERY_OLIVES">GROCERY_OLIVES</option>
              <option value="GROCERY_PANCAKE/SYRUP">GROCERY_PANCAKE/SYRUP</option>
              <option value="GROCERY_PASTA">GROCERY_PASTA</option>
              <option value="GROCERY_PASTA SAUCE">GROCERY_PASTA SAUCE</option>
              <option value="GROCERY_PEPPERS">GROCERY_PEPPERS</option>
              <option value="GROCERY_PICKLES">GROCERY_PICKLES</option>
              <option value="GROCERY_PIE FILLINGS">GROCERY_PIE FILLINGS</option>
              <option value="GROCERY_POPCORN MICROWAVE">GROCERY_POPCORN MICROWAVE</option>
              <option value="GROCERY_POTATOES">GROCERY_POTATOES</option>
              <option value="GROCERY_RICE- BAGGED">GROCERY_RICE- BAGGED</option>
              <option value="GROCERY_SALAD DRESSING">GROCERY_SALAD DRESSING</option>
              <option value="GROCERY_SALSA">GROCERY_SALSA</option>
              <option value="GROCERY_SODA- MULTIPACK">GROCERY_SODA- MULTIPACK</option>
              <option value="GROCERY_SOUP">GROCERY_SOUP</option>
              <option value="GROCERY_SOUP- DRY">GROCERY_SOUP- DRY</option>
              <option value="GROCERY_SPICES">GROCERY_SPICES</option>
              <option value="GROCERY_SPORTS DRINKS">GROCERY_SPORTS DRINKS</option>
              <option value="GROCERY_STUFFING">GROCERY_STUFFING</option>
              <option value="GROCERY_SUGAR/FLOUR">GROCERY_SUGAR/FLOUR</option>
              <option value="GROCERY_TEA - NON RTD">GROCERY_TEA - NON RTD</option>
              <option value="GROCERY_TEA- MULTISERVE">GROCERY_TEA- MULTISERVE</option>
              <option value="GROCERY_TOMATOES">GROCERY_TOMATOES</option>
              <option value="GROCERY_TORTILLAS (Slack Out)">GROCERY_TORTILLAS (Slack Out)</option>
              <option value="GROCERY_VEGETABLES - CANNED/GLASS">GROCERY_VEGETABLES - CANNED/GLASS</option>
              <option value="GROCERY_VINEGAR">GROCERY_VINEGAR</option>
              <option value="GROCERY_WATER- ENHANCER">GROCERY_WATER- ENHANCER</option>
              <option value="GROCERY_WATER- MULTI PACK">GROCERY_WATER- MULTI PACK</option>
              <option value="GROCERY_WATER- SPARKLING">GROCERY_WATER- SPARKLING</option>
              <option value="GROCERY_YEAST/FLAX">GROCERY_YEAST/FLAX</option>
              <option value="HEALTH/BEAUTY_ANALGESICS, PAIN RELIEF">HEALTH/BEAUTY_ANALGESICS, PAIN RELIEF</option>
              <option value="HEALTH/BEAUTY_AROMATHERAPY">HEALTH/BEAUTY_AROMATHERAPY</option>
              <option value="HEALTH/BEAUTY_BABY DIAPERS">HEALTH/BEAUTY_BABY DIAPERS</option>
              <option value="HEALTH/BEAUTY_BABY WIPES">TAB</option>
              <option value="HEALTH/BEAUTY_BODY WASH/BAR SOAP">HEALTH/BEAUTY_BODY WASH/BAR SOAP</option>
              <option value="HEALTH/BEAUTY_COLD & ALLERGY - PILLS">HEALTH/BEAUTY_COLD & ALLERGY - PILLS</option>
              <option value="HEALTH/BEAUTY_COLD & ALLERGY- LIQUID">HEALTH/BEAUTY_COLD & ALLERGY- LIQUID</option>
              <option value="HEALTH/BEAUTY_COUGH DROPS">HEALTH/BEAUTY_COUGH DROPS</option>
              <option value="HEALTH/BEAUTY_DEODORANT">HEALTH/BEAUTY_DEODORANT</option>
              <option value="HEALTH/BEAUTY_DIGESTIVE HEALTH AND CLEANSING">HEALTH/BEAUTY_DIGESTIVE HEALTH AND CLEANSING</option>
              <option value="HEALTH/BEAUTY_EYE CARE">HEALTH/BEAUTY_EYE CARE</option>
              <option value="HEALTH/BEAUTY_FAMILY PLANNING">HEALTH/BEAUTY_FAMILY PLANNING</option>
              <option value="HEALTH/BEAUTY_FEMININE HYGIENE">HEALTH/BEAUTY_FEMININE HYGIENE</option>
              <option value="HEALTH/BEAUTY_FEMININE HYGIENE - PADS">HEALTH/BEAUTY_FEMININE HYGIENE - PADS</option>
              <option value="HEALTH/BEAUTY_FEMININE MEDICATION">HEALTH/BEAUTY_FEMININE MEDICATION</option>
              <option value="HEALTH/BEAUTY_FIRST AID / BAND-AIDS">HEALTH/BEAUTY_FIRST AID / BAND-AIDS</option>
              <option value="HEALTH/BEAUTY_FOOT CARE">HEALTH/BEAUTY_FOOT CARE</option>
              <option value="HEALTH/BEAUTY_HAIR COLOR">HEALTH/BEAUTY_HAIR COLOR</option>
              <option value="HEALTH/BEAUTY_HAND SOAP">HEALTH/BEAUTY_HAND SOAP</option>
              <option value="HEALTH/BEAUTY_LIP CARE">HEALTH/BEAUTY_LIP CARE</option>
              <option value="HEALTH/BEAUTY_LOTION">HEALTH/BEAUTY_LOTION</option>
              <option value="HEALTH/BEAUTY_MOUTH WASH/FLOSS">HEALTH/BEAUTY_MOUTH WASH/FLOSS</option>
              <option value="HEALTH/BEAUTY_REFRIGERATED ESSENTIAL FATTY ACIDS (EFAS) AND PROBIOTICS">HEALTH/BEAUTY_REFRIGERATED ESSENTIAL FATTY ACIDS (EFAS) AND PROBIOTICS</option>
              <option value="HEALTH/BEAUTY_SHAMPOO/CONDITIONER/STYLING">HEALTH/BEAUTY_SHAMPOO/CONDITIONER/STYLING</option>
              <option value="HEALTH/BEAUTY_SHAVING">HEALTH/BEAUTY_SHAVING</option>
              <option value="HEALTH/BEAUTY_SKINCARE">HEALTH/BEAUTY_SKINCARE</option>
              <option value="HEALTH/BEAUTY_SUN SCREEN">HEALTH/BEAUTY_SUN SCREEN</option>
              <option value="HEALTH/BEAUTY_TOOTHBRUSH">HEALTH/BEAUTY_TOOTHBRUSH</option>
              <option value="HEALTH/BEAUTY_TOOTHPASTE">HEALTH/BEAUTY_TOOTHPASTE</option>
              <option value="HEALTH/BEAUTY_TRAVEL SIZES">HEALTH/BEAUTY_TRAVEL SIZES</option>
              <option value="NON FOODS_ALUMINUM FOIL, ZIPLOC, PLASTIC WRAP">NON FOODS_ALUMINUM FOIL, ZIPLOC, PLASTIC WRAP</option>
              <option value="NON FOODS_BAGS/FOIL/WRAP">NON FOODS_BAGS/FOIL/WRAP</option>
              <option value="NON FOODS_BATHROOM TISSUE">NON FOODS_BATHROOM TISSUE</option>
              <option value="NON FOODS_DISH SOAP">NON FOODS_DISH SOAP</option>
              <option value="NON FOODS_FACIAL TISSUE">NON FOODS_FACIAL TISSUE</option>
              <option value="NON FOODS_LAUNDRY / STAIN REMOVER / FABRIC SOFTENER">NON FOODS_LAUNDRY / STAIN REMOVER / FABRIC SOFTENER</option>
              <option value="NON FOODS_LAUNDRY DETERGENT -  ">NON FOODS_LAUNDRY DETERGENT -  </option>
              <option value="NON FOODS_LAUNDRY DETERGENT - CONVENTIONAL">NON FOODS_LAUNDRY DETERGENT - CONVENTIONAL</option>
              <option value="NON FOODS_LAUNDRY DETERGENT - POWDER">NON FOODS_LAUNDRY DETERGENT - POWDER</option>
              <option value="NON FOODS_MRS MEYERS">NON FOODS_MRS MEYERS</option>
              <option value="NON FOODS_MULTI PURPOSE CLEANERS / FLOOR CLEANER">NON FOODS_MULTI PURPOSE CLEANERS / FLOOR CLEANER</option>
              <option value="NON FOODS_NAPKINS">NON FOODS_NAPKINS</option>
              <option value="NON FOODS_PAPER PLATES/UTENSILS/CUPS">NON FOODS_PAPER PLATES/UTENSILS/CUPS</option>
              <option value="NON FOODS_PAPER TOWELS">NON FOODS_PAPER TOWELS</option>
              <option value="NON FOODS_PET: CAT FOOD">NON FOODS_PET: CAT FOOD</option>
              <option value="NON FOODS_PET: CAT LITTER">NON FOODS_PET: CAT LITTER</option>
              <option value="NON FOODS_PET: CAT TOYS">NON FOODS_PET: CAT TOYS</option>
              <option value="NON FOODS_PET: CAT TREATS">NON FOODS_PET: CAT TREATS</option>
              <option value="NON FOODS_PET: DOG FOOD">NON FOODS_PET: DOG FOOD</option>
              <option value="NON FOODS_PET: DOG GROOMING AND COLLARS">NON FOODS_PET: DOG GROOMING AND COLLARS</option>
              <option value="NON FOODS_PET: DOG RAWHIDE">NON FOODS_PET: DOG RAWHIDE</option>
              <option value="NON FOODS_PET: DOG TOYS">NON FOODS_PET: DOG TOYS</option>
              <option value="NON FOODS_PET: DOG TREATS ">NON FOODS_PET: DOG TREATS </option>
              <option value="NON FOODS_PET: TOPICAL CARE, SUPPLEMENTS AND SUPPLIES">NON FOODS_PET: TOPICAL CARE, SUPPLEMENTS AND SUPPLIES</option>
              <option value="VITAMINS_ESSENTIAL FATTY ACIDS (EFAS)">VITAMINS_ESSENTIAL FATTY ACIDS (EFAS)</option>
              <option value="VITAMINS_EYE HEALTH">VITAMINS_EYE HEALTH</option>
              <option value="VITAMINS_GREENS/DIET AIDS/NUTRITIONAL ENHANCERS">VITAMINS_GREENS/DIET AIDS/NUTRITIONAL ENHANCERS</option>
              <option value="VITAMINS_HERBS/HOMEOPATHY">VITAMINS_HERBS/HOMEOPATHY</option>
              <option value="VITAMINS_JOINT/HEART/SLEEP">VITAMINS_JOINT/HEART/SLEEP</option>
              <option value="VITAMINS_MULTI/MEN'S VITAMINS">VITAMINS_MULTI/MEN'S VITAMINS</option>
              <option value="VITAMINS_VITAMINS: LETTER VITAMINS/MINERALS/AMINOS">VITAMINS_VITAMINS: LETTER VITAMINS/MINERALS/AMINOS</option>
              <option value="WALL DELI_BOXED LUNCHMEALS">WALL DELI_BOXED LUNCHMEALS</option>
              <option value="WALL DELI_CHIP DIPS_SALSA_HUMMUS">WALL DELI_CHIP DIPS_SALSA_HUMMUS</option>
              <option value="WALL DELI_CONDIMENTS">WALL DELI_CONDIMENTS</option>
              <option value="WALL DELI_FRESH PASTA & SAUCE">WALL DELI_FRESH PASTA & SAUCE</option>
              <option value="WALL DELI_HISPANIC: ETHNIC_SPECIALTY_ MEAT_CHEESE_DSD">WALL DELI_HISPANIC: ETHNIC_SPECIALTY_ MEAT_CHEESE_DSD</option>
              <option value="WALL DELI_PICKLES SAUERKRAUT">WALL DELI_PICKLES SAUERKRAUT</option>
              <option value="WALL DELI_PREPARED MEALS_ENTREES">WALL DELI_PREPARED MEALS_ENTREES</option>
              <option value="WALL DELI - CHIP DIPS - SALSA - HUMMUS">WALL DELI - CHIP DIPS - SALSA - HUMMUS</option>
              <option value="WALL DELI - FRESH PASTA & SAUCE">WALL DELI - FRESH PASTA & SAUCE</option>
              <option value="WALL DELI - FRESH SAUSAGE ROPES - ROLLS">WALL DELI - FRESH SAUSAGE ROPES - ROLLS</option>
              <option value="WALL DELI - HAM SMOKED - CANNED">WALL DELI - HAM SMOKED - CANNED</option>
              <option value="WALL DELI - HISPANIC: ETHNIC - SPECIALTY -  MEAT - CHEESE - DSD">WALL DELI - HISPANIC: ETHNIC - SPECIALTY -  MEAT - CHEESE - DSD</option>
              <option value="WALL DELI - HOT DOGS">WALL DELI - HOT DOGS</option>
              <option value="WALL DELI - LUNCHMEATS: STRIPS - CUTS - SLICED -  PEGABLE">WALL DELI - LUNCHMEATS: STRIPS - CUTS - SLICED -  PEGABLE</option>
              <option value="WALL DELI - PEPPERONI - SALAMI - CAND BACON - SUMMER SAUSAGE">WALL DELI - PEPPERONI - SALAMI - CAND BACON - SUMMER SAUSAGE</option>
              <option value="WALL DELI - PICKLES SAUERKRAUT">WALL DELI - PICKLES SAUERKRAUT</option>
              <option value="WALL DELI - PREPARED MEALS - ENTREES - SOUP - HEAT N EAT">WALL DELI - PREPARED MEALS - ENTREES - SOUP - HEAT N EAT</option>
              <option value="WALL DELI - PROCESSED CHEESE SLICES">WALL DELI - PROCESSED CHEESE SLICES</option>
              <option value="WALL DELI - SPICES - SAUCES - CONIDMENTS">WALL DELI - SPICES - SAUCES - CONIDMENTS</option>
              <option value="WALL DELI - TORTILLAS (Chill)">WALL DELI - TORTILLAS (Chill)</option>
            </select>
          </label>
        </form>
    </div>
  )
  
}

export default SubmitItem;