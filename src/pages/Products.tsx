import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageCarousel from "@/components/ImageCarousel";

export default function Products() {
  return (
    <>
      <ImageCarousel />
      <div className="p-4">
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="sarees">Sarees</TabsTrigger>
            <TabsTrigger value="suits">Suits</TabsTrigger>
            <TabsTrigger value="dupattas">Dupattas</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Coming Soon</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sarees">
            <Card>
              <CardHeader>
                <CardTitle>Sarees</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Coming Soon</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="suits">
            <Card>
              <CardHeader>
                <CardTitle>Suits</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Coming Soon</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dupattas">
            <Card>
              <CardHeader>
                <CardTitle>Dupattas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Coming Soon</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
