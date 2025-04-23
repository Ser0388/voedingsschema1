'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

export default function Home() {
  const [schema, setSchema] = useState({});
  const [selectedWeek, setSelectedWeek] = useState("Week 1");

  useEffect(() => {
    fetch("/voedingsschema.json")
      .then((res) => res.json())
      .then((data) => {
        setSchema(data);
        setSelectedWeek(Object.keys(data)[0]);
      });
  }, []);

  const weekData = schema[selectedWeek] || [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Voedingsschema Dashboard</h1>
      <Tabs defaultValue={selectedWeek} onValueChange={setSelectedWeek} className="mb-4">
        <TabsList>
          {Object.keys(schema).map((week) => (
            <TabsTrigger key={week} value={week}>{week}</TabsTrigger>
          ))}
        </TabsList>
        {Object.keys(schema).map((week) => (
          <TabsContent key={week} value={week}>
            {schema[week]?.map((dag) => (
              <Card key={dag.dag} className="mb-4">
                <CardContent>
                  <h2 className="text-xl font-semibold mb-2">{dag.dag}</h2>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Maaltijd</TableHead>
                        <TableHead>Gerecht</TableHead>
                        <TableHead>Kcal</TableHead>
                        <TableHead>Eiwit</TableHead>
                        <TableHead>Vet</TableHead>
                        <TableHead>Khd</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dag.maaltijden.map((m, i) => (
                        <TableRow key={i}>
                          <TableCell>{m.type}</TableCell>
                          <TableCell>{m.gerecht}</TableCell>
                          <TableCell>{m.kcal}</TableCell>
                          <TableCell>{m.eiwit}g</TableCell>
                          <TableCell>{m.vet}g</TableCell>
                          <TableCell>{m.khd}g</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}