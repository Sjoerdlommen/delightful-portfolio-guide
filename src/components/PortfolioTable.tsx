
import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface PortfolioItem {
  id: string;
  ticker: string;
  aantal: number;
  gekocht_voor: number;
  gekocht_op: string;
}

export const PortfolioTable = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { data, error } = await supabase
          .from('Portefeuille')
          .select('*');

        if (error) throw error;

        if (data) {
          setPortfolioItems(data);
        }
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (isLoading) {
    return <div className="p-8 text-center">Loading portfolio data...</div>;
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Portfolio Overzicht</h2>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticker</TableHead>
            <TableHead className="text-right">Aantal</TableHead>
            <TableHead className="text-right">Gekocht voor</TableHead>
            <TableHead className="text-center">Gekocht op</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {portfolioItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.ticker}</TableCell>
              <TableCell className="text-right">{item.aantal}</TableCell>
              <TableCell className="text-right">
                €{item.gekocht_voor?.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </TableCell>
              <TableCell className="text-center">{item.gekocht_op}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
