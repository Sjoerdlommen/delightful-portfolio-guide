
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
  stock_name: string;
  isin: string;
  quantity: number;
  price_per_share: number;
  currency: string;
  total_value: number;
  total_value_eur: number;
}

export const PortfolioTable = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [totalValueEur, setTotalValueEur] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { data, error } = await supabase
          .from('portfolio_items')
          .select('*');

        if (error) throw error;

        if (data) {
          setPortfolioItems(data);
          const total = data.reduce((sum, item) => sum + item.total_value_eur, 0);
          setTotalValueEur(total);
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
        <p className="text-muted-foreground">
          Totale waarde: €{totalValueEur.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Aandeel</TableHead>
            <TableHead>ISIN</TableHead>
            <TableHead className="text-right">Aantal</TableHead>
            <TableHead className="text-right">Koers</TableHead>
            <TableHead className="text-center">Valuta</TableHead>
            <TableHead className="text-right">Totaal (EUR)</TableHead>
            <TableHead className="text-right">% van Portfolio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {portfolioItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.stock_name}</TableCell>
              <TableCell className="font-mono text-sm">{item.isin}</TableCell>
              <TableCell className="text-right">{item.quantity}</TableCell>
              <TableCell className="text-right">
                {item.price_per_share.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </TableCell>
              <TableCell className="text-center">{item.currency}</TableCell>
              <TableCell className="text-right">
                {item.total_value_eur.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </TableCell>
              <TableCell className="text-right">
                {((item.total_value_eur / totalValueEur) * 100).toFixed(1)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
