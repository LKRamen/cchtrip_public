import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv'; // Or import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: 'j9snegjr', // Replace with your project ID
  dataset: 'production', // or your dataset name
  useCdn: false,
  token: "skx3dzgm8hW7F0OizwXZXk6qFq82nF3zYYw9ka8q0jGe1eyFR2PLw1CGBLpitVfDr6y9cyx7aZPRGv0ewIsKILrk4tuT4RF4c8AVcI16hUE50jZ34vWsz8nBJOC1Qy6w9XHOgHRnHVMiKGQ8n44rqQ6wOp6MthMDrCllsJCpDFy1T4dkopGP", // Get this from sanity.io/manage
  apiVersion: '2024-01-01',
});

// Visa data structure
interface VisaData {
  name: string;
  description: string;
  longestStay: string;
  scopeOfAcceptance: string;
  processingTime: string;
  price: string;
  featured?: boolean;
  order?: number;
  imageUrl?: string; // Optional: URL to upload as image
}

// 25 Visa documents data
const visasData: VisaData[] = [
  {
    name: "Q1团聚类签证",
    description: "美国赴华",
    longestStay: "350天",
    scopeOfAcceptance: "国内有直系亲属的美国公民",
    processingTime: "2周-3",
    price: "$200起",
    featured: true,
    order: 1
  },
  {
    name: "Q2探亲类签证",
    description: "美国赴华",
    longestStay: "180天",
    scopeOfAcceptance: "国内有邀请人的美国公民",
    processingTime: "2周-3周",
    price: "$200起",
    featured: true,
    order: 2
  },
  {
    name: "M商务签证",
    description: "赴华签证",
    longestStay: "60-90天",
    scopeOfAcceptance: "赴中国进行商业贸易活动",
    processingTime: "2周-3周",
    price: "$200起",
    featured: true,
    order: 3
  },
  {
    name: "欧洲申根签证",
    description: "旅游签证",
    longestStay: "60天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "2周-3周",
    price: "$100起",
    featured: true,
    order: 4
  },
  {
    name: "加拿大签证",
    description: "旅游签证",
    longestStay: "60天",
    scopeOfAcceptance: "中国公民",
    processingTime: "2月",
    price: "$100起",
    featured: false,
    order: 5
  },
  {
    name: "美国旅游签证",
    description: "赴美签证",
    longestStay: "60天",
    scopeOfAcceptance: "中国公民",
    processingTime: "3月",
    price: "$500起",
    featured: false,
    order: 6
  },
  {
    name: "B1/B2延期",
    description: "赴美签证",
    longestStay: "180天",
    scopeOfAcceptance: "中国公民",
    processingTime: "1-2月",
    price: "$755",
    featured: false,
    order: 7
  },
  {
    name: "F1学生签证",
    description: "赴美签证",
    longestStay: "在校期间",
    scopeOfAcceptance: "中国公民",
    processingTime: "6月",
    price: "$3000",
    featured: false,
    order: 8
  },
  {
    name: "日本签证",
    description: "旅行签证",
    longestStay: "15天以内",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "2周-4周",
    price: "$100起",
    featured: false,
    order: 9
  },
  {
    name: "英国签证",
    description: "旅游签证",
    longestStay: "不超过3个月",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "2周-3周",
    price: "$100起",
    featured: false,
    order: 10
  },
  {
    name: "澳大利亚签证",
    description: "旅游签证",
    longestStay: "90天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "1月",
    price: "$100起",
    featured: false,
    order: 11
  },
  {
    name: "土耳其电子签证",
    description: "旅游签证",
    longestStay: "60天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "当天",
    price: "$50",
    featured: false,
    order: 12
  },
  {
    name: "泰国签证",
    description: "旅游签证",
    longestStay: "60天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "1周",
    price: "$100起",
    featured: false,
    order: 13
  },
  {
    name: "新加坡电子签证",
    description: "旅游签证",
    longestStay: "30天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "3天",
    price: "$100起",
    featured: false,
    order: 14
  },
  {
    name: "爱尔兰签证",
    description: "旅游签证",
    longestStay: "90天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "10天",
    price: "$100起",
    featured: false,
    order: 15
  },
  {
    name: "C-3-9韩国旅游签证",
    description: "旅游签证",
    longestStay: "15-90天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "10-14天",
    price: "$100起",
    featured: false,
    order: 16
  },
  {
    name: "阿根廷电子签证",
    description: "旅游签证",
    longestStay: "90天",
    scopeOfAcceptance: "中国公民",
    processingTime: "20-45天",
    price: "$100起",
    featured: false,
    order: 17
  },
  {
    name: "巴拉圭签证",
    description: "旅游签证",
    longestStay: "90天",
    scopeOfAcceptance: "中国公民",
    processingTime: "1周",
    price: "$100起",
    featured: false,
    order: 18
  },
  {
    name: "乌拉圭签证",
    description: "旅游签证",
    longestStay: "90天",
    scopeOfAcceptance: "中国公民",
    processingTime: "1周",
    price: "$100起",
    featured: false,
    order: 19
  },
  {
    name: "越南商务签证",
    description: "旅游签证",
    longestStay: "30-90天",
    scopeOfAcceptance: "赴越南进行商业贸易活动",
    processingTime: "1周",
    price: "$100起",
    featured: false,
    order: 20
  },
  {
    name: "马来西亚电子签证",
    description: "旅游签证",
    longestStay: "30天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "1天",
    price: "$100起",
    featured: false,
    order: 21
  },
  {
    name: "南非签证",
    description: "旅游签证",
    longestStay: "90天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "3-5月",
    price: "$100起",
    featured: false,
    order: 22
  },
  {
    name: "台湾特别入境许可",
    description: "旅游签证",
    longestStay: "14-90天",
    scopeOfAcceptance: "中国公民",
    processingTime: "1月",
    price: "$100起",
    featured: false,
    order: 23
  },
  {
    name: "香港签证或入境许可",
    description: "旅游签证",
    longestStay: "看情况",
    scopeOfAcceptance: "美国绿卡或F1/H1B需在香港停留超过7天",
    processingTime: "当天",
    price: "$100起",
    featured: false,
    order: 24
  },
  {
    name: "以色列旅游签证",
    description: "旅游签证",
    longestStay: "30天",
    scopeOfAcceptance: "美国绿卡或F1/H1B",
    processingTime: "1月",
    price: "$100起",
    featured: false,
    order: 25
  }
];

async function importVisas() {
  console.log('Starting visa import...');
  
  const results = {
    success: 0,
    failed: 0,
    errors: [] as any[]
  };

  for (const visaData of visasData) {
    try {
      // Generate slug from name
      const slug = visaData.name
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      // Create document
      const doc = {
        _type: 'visa',
        name: visaData.name,
        slug: {
          _type: 'slug',
          current: slug
        },
        description: visaData.description,
        longestStay: visaData.longestStay,
        scopeOfAcceptance: visaData.scopeOfAcceptance,
        processingTime: visaData.processingTime,
        price: visaData.price,
        featured: visaData.featured || false,
        order: visaData.order || 0
      };

      // Create the document
      await client.create(doc);
      
      console.log(`✓ Created: ${visaData.name}`);
      results.success++;
      
    } catch (error) {
      console.error(`✗ Failed: ${visaData.name}`, error);
      results.failed++;
      results.errors.push({ visa: visaData.name, error });
    }
  }

  console.log('\n=== Import Summary ===');
  console.log(`✓ Success: ${results.success}`);
  console.log(`✗ Failed: ${results.failed}`);
  
  if (results.errors.length > 0) {
    console.log('\nErrors:');
    results.errors.forEach(({ visa, error }) => {
      console.log(`  - ${visa}: ${error.message}`);
    });
  }
}

// Run the import
importVisas()
  .then(() => {
    console.log('\nImport completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Import failed:', error);
    process.exit(1);
  });